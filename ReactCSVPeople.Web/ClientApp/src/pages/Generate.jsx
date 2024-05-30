import React, { useState } from "react";
import axios from 'axios';

const downloadBase64File = (base64String, fileName) => {
    const link = document.createElement('a');
    link.download = fileName;
    link.href = 'data:application/octet-stream;base64,' + base64String;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


const Generate = () => {
    const [amount, setAmount] = useState('');

    const onGenerateClick = async () => {
        window.location.href = `/api/csvpeople/generate?amount=${amount}`;
    }

    const onGenerateAsPostClick = async () => {
        const { data } = await axios.post('/api/csvpeople/generateaspost', { amount });
        downloadBase64File(data.base64, "people.csv");
    }

    return (
        <div className="d-flex vh-100" style={{ marginTop: -70 }}>
            <div className="d-flex w-100 justify-content-center align-self-center">
                <div className="row">
                    <input type="text" className="form-control-lg" placeholder="Amount" onChange={e => setAmount(e.target.value)} />
                </div>
                <div className="row mt-3">
                    <div className="col-md-6 d-flex justify-content-end">
                        <button className="btn btn-primary btn-lg" onClick={onGenerateClick}>Generate</button>
                    </div>
                    <div className="col-md-6 d-flex justify-content-start">
                        <button className="btn btn-primary btn-lg" onClick={onGenerateAsPostClick}>Generate as Post</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Generate;