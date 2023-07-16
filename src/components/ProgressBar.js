import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import { motion } from "framer-motion";
import { FIRESTORE_COLLECTION_NAME } from "../firebase/config";
import { red } from "@mui/material/colors";

const ProgressBar = ({ file, setFile ,height }) => {

  const { progress, url, addImageToFirebase } = useStorage();


  const Parentdiv = {
    height: height,
    width: '85%',
    backgroundColor: 'whitesmoke',
    borderRadius: 40,
    margin: 20
  }
  
  const Childdiv = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: "#99ff66",
   borderRadius:40,
    textAlign: 'right'
  }
  const progresstext = {
    padding: 10,
    color: 'black',
    fontWeight: 900
  }
    

 
  useEffect(() => {
    if (url) {
      setFile(null)
    }
  }, [url, setFile]);

  useEffect(() => {
    file && addImageToFirebase(file, FIRESTORE_COLLECTION_NAME);
  }, [file]);

  return (
    <div style={Parentdiv}>
    <div style={Childdiv}>
      <span style={progresstext}>{`${progress}%`}</span>
    </div>
  </div>
  );
};

export default ProgressBar;
