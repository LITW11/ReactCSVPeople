import React, { useRef } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

const Upload = () => {
    const fileInputRef = useRef(null);
    const navigate = useNavigate();
    const onUploadClick = async () => {
        if(!fileInputRef.current.files.length) {
            return;
        }
        const file = fileInputRef.current.files[0];
        const base64File = await toBase64(file);
        await axios.post('/api/csvpeople/upload', { base64File });
        navigate('/');
    }

    return (
        <div className="d-flex vh-100" style={{ marginTop: -70 }}>
            <div className="d-flex w-100 justify-content-center align-self-center">
                <div className="row">
                    <div className="col-md-10">
                        <input ref={fileInputRef} type="file" className='form-control' />
                    </div>
                    <div className='col-md-2'>
                        <button className='btn btn-primary' onClick={onUploadClick}>Upload</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Upload;