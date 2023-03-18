// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhy0ibGFj9XcAP4KevcQJyPxYeeycy12w",
  authDomain: "fileuploader-a7673.firebaseapp.com",
  projectId: "fileuploader-a7673",
  storageBucket: "fileuploader-a7673.appspot.com",
  messagingSenderId: "949151603260",
  appId: "1:949151603260:web:91d435ac87d326fb9b4139",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app); //NOTE: This getStorage() fn helps us access storage of firebase.
