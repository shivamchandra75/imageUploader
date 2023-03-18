import { useState, useEffect } from "react";
import "./App.scss";
import { storage } from "./firebase"; //NOTE:this storage is the storage constant that we made in './firebase.js' file.
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage"; //NOTE:This "ref" is from firebase. It will help us to tell where to store the uploaded file
import { v4 } from "uuid";

function App() {
  const [fileToUpload, setFileToUpload] = useState(null);
  const [imageList, setImageList] = useState([]);

  let imageListRef = ref(storage, "image/");

  function uploadFile() {
    if (fileToUpload == null) return;
    const imageRef = ref(storage, `image/${fileToUpload.name + v4()}`);

    uploadBytes(imageRef, fileToUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList((prev) => [...prev, url]); //updating imagelist url array
      });
    });
  }
  function handleDragOver(e) {
    e.preventDefault();
  }

  function handleDrop(e) {
    e.preventDefault();
    setFileToUpload(e.dataTransfer.files[0]);
  }

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div className="App">
      <div
        className="drag-drop-area"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <input
          className="input"
          type="file"
          onChange={(e) => setFileToUpload(e.target.files[0])}
        />
        <button className="uploadBtn" type="button" onClick={uploadFile}>
          UPLOAD
        </button>
      </div>
      <div className="img-container">
        {imageList.map((url) => {
          return (
            <div className="img-div">
              <img src={url} key={url} />;
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
