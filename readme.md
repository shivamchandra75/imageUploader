# This is an image uploader. You can choose a file and upload it in the firebase server.

## Tech stack used

- **fireBase** for backend
- **uuid** for generating random letter so that every file has a unique name.
- **React**

## Functions used

- SELF-MADE FUNCTIONS

  - uploadFile()
  - handleDragOver()
  - handleDrop()

- IMPORTED FUNCTIONS
  - getStorage()
  - ref()
  - uploadBytes()
  - listAll()
  - getDownloadURL()

```js
<input
  className="input"
  type="file"
  onChange={(e) => setFileToUpload(e.target.files[0])}
/>
```

First we input from the input field and when a file is selected we set it to the **"fileToUpload"** state to this selected file.

Now that we have a file to upload we press the upload button

```js
<button className="uploadBtn" type="button" onClick={uploadFile}>
  UPLOAD
</button>
```

## Uploading the File

look in the above code-block, there is an uploadFile fn attached to onClick event.

```js
function uploadFile() {
  if (fileToUpload == null) return;
  const imageRef = ref(storage, `image/${fileToUpload.name + v4()}`);

  uploadBytes(imageRef, fileToUpload).then((snapshot) => {
    getDownloadURL(snapshot.ref).then((url) => {
      setImageList((prev) => [...prev, url]);
    });
  });
}
```

1. we check if there is even a file to upload
   - remember we have set the **fileToUpload** state in the input "onChange" event.
2. now we set where we want to store the uploaded file, for that we use a ref fn provided by firebase. ref(storage, path_to_storage_location)
   - firt parameter is the storage.
   - second parameter is the location where you want to store the image, for example an image folder inside the storage.
