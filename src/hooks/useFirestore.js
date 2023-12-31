import { useState, useEffect } from "react";
import { projectFireStore, projectFirestore } from "../firebase/config";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";


const useFirestore = (collectionName) => {
  const [docs, setDocs] = useState([]);



  useEffect(() => {
   

    const q = query(
      collection(projectFireStore, collectionName),
      orderBy("createdAt", "desc")
    );

    
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const imageData = [];
      querySnapshot.forEach((doc) => {
        imageData.push({ ...doc.data(), id: doc.id });
      });

      setDocs(imageData);
    });

    console.log(docs);

    return () => unsubscribe();
  }, [collectionName]);

  return { docs };
};

export default useFirestore;
