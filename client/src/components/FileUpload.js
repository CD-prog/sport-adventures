import React, { useState } from 'react';
import { render } from 'react-dom';
import '../containers/Profile.css'
import { storage } from '../fire'
// import { storage } from '../FirebaseUpload/index'


const FileUpload = () => {

    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");

    const handleChange = e => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };
    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => { },
            error => {
            },
            () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        setUrl(url);
                    })
            }
        )
    };
    return (
        <div>
            <img src={url || "https://lippianfamilydentistry.net/wp-content/uploads/2015/11/user-default.png"} alt="firebaseimage" height="200" width="200" />
            <br />
            <input type='file' onChange={handleChange} />
            <br />
            <button onClick={handleUpload}>Upload</button>
        </div>
    )
}

render(<FileUpload />, document.querySelector('#root'));

export default FileUpload