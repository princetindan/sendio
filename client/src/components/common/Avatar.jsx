import React from "react";
import Image from "next/image";

function Avatar({ type, image, setImage }) {
  const [hover, setHover] = useState(false)
  return( <>
    <div className="flex items-center justify-center">
        {type === "sm" && (
      <div className="relative h-10 w-10">
          <image src={image} alt="avatar" className="rounded-full" />
        </div>)}
       {type === "lg" && (
      <div className="relative h-14 w-14">
          <Image src={image} alt="avatar" className="rounded-full" />
        </div>)}
      <div className="relative cursor-pointer z-0" 
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(true)}
      >
       {type === "xl" && (
          <div className="relative h-60 w-60"
          
          >
          <image src={image} alt="avatar" className="rounded-full" />
          </div>)}
        </div>
    </div>
  </>
  )}

export default Avatar;
