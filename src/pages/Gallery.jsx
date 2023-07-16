import React, { useState } from 'react'
import { FormToUpload, ImageGrid, Modal, Title } from '../components';

const Gallery = () => {
    const [selectedImg, setSelectedImg] = useState(null);
    // const [darkmode,setDarkmode] = useState(false);
    return (
  
      <div className="galleryHome">
    
      <Title />
      <FormToUpload />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
    );
}

export default Gallery