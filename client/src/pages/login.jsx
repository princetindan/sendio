import Image from "next/image";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { firebaseAuth } from "@/utils/FirebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function login() {
  const handleLogin = async() => {
    // alert("login");
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup (firebaseAuth, provider);
    console.log({ user });
  }
  return( 
    <div className= "flex justify-center items-center bg-panel-header-background h-screen w-screen flex-col gap-6" >
    <div className="flex items-center justify-center gap-2 text-white">
    <Image
       src="/whatsapp.gif" alt="Whatapp" height="300" width="300" />
      <span className="text-7x1">Whatsapp</span>
        <button className="flex items-center justify-center gab-7 bg-search-input-container-background p-5 round-lg"
          onClick={handleLogin}>
          <FcGoogle className="text-4x1" />
          <span className="text-white text 2x1">Login with Google</span>
        </button>
      </div>
    </div>
)}

export default login;
 