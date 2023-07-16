import React from "react";
import { motion } from "framer-motion";

const Modal = ({ setSelectedImg, selectedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };

  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
     

      <motion.div class="pdf-container">
        <motion.iframe
          src={selectedImg}
          type="application/pdf"
          width="100%"
          height="100%"

        />
      </motion.div>
    </motion.div>
  );
};

export default Modal;
