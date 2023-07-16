import { useState, useEffect } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

import { addDoc, collection } from "firebase/firestore";
import { projectFireStore } from "../firebase/config";


const useStorage = () => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);


  

  const storage = getStorage();

  
  const addImageToFirebase = (file, collectionName) => {
    const fileId = uuidv4();

    console.log(file);
    const formatFile = file.type.split("/")[1];
    
    const storageRef = ref(storage, `Files/${fileId}.${formatFile}`);

    console.log(storageRef);

    const uploadTask = uploadBytesResumable(storageRef, file);

    
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        setProgress(progress);
      },
      (error) => {
        
        setError(error);
      },
      async () => {
       
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        const createdAt = new Date();
        

        console.log("printing in hooks", `Files/${fileId}.${formatFile}`);

        await addDoc(collection(projectFireStore, collectionName), {
          imageURL: downloadURL,
          createdAt,
         
          path: `Files/${fileId}.${formatFile}`,
        });
        setUrl(downloadURL);

        console.log("File available at", downloadURL, createdAt);
      }
    );
  };

  return { progress, url, error, addImageToFirebase };
};

export default useStorage;
