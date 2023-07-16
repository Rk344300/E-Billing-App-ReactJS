import React, { useEffect, useState } from 'react';
import ProgressBar from './ProgressBar';

import CreateNewFolderTwoToneIcon from '@mui/icons-material/CreateNewFolderTwoTone';

const FormToUpload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  // const types = ['image/png', 'image/jpeg'];
  const types = ['application/pdf'];

  const handleChange = (e) => {
    let selected = e.target.files[0];
    console.log(selected)

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an PDF file to upload');
    }
  };

  useEffect(() => {

    setFile(null);
  },[])

  return (
    <form>
      {console.log("called", file)}
      <label id="uploadLabel">
        <input type="file" onChange={handleChange} />
        <span><CreateNewFolderTwoToneIcon /></span>
      </label>
      <div className="output">
        { error && <div className="error">{ error }</div>}
        { file && <div className='fileName'>{ file.name }</div> }
        { file && <ProgressBar file={file} setFile={setFile} height={20}/> }

       
      </div>
    </form>
  );
}

export default FormToUpload;