//import * as firebase from "firebase"
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAYYPZzDINdc_RES1iFUqbycKYOCKluGGY",
  authDomain: "sendio-b3a9c.firebaseapp.com",
  projectId: "sendio-b3a9c",
  storageBucket: "sendio-b3a9c.appspot.com",
  messagingSenderId: "366165413731",
  appId: "1:366165413731:web:2b4d45a8ca5c2a69cecd56",
  measurementId: "G-W4F2Z7VJXW"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
