import "./GalleryCard.css";
import React, { useState } from 'react'


export default function GalleryCard({ title, description , bgImg, func}) {
  const [TextVisibility, setTextVisibility] = useState("hidden");

  return (
    <div className="gallery-card"
      onClick={() => {
        func(bgImg,title,"flex")
      }}
      onMouseOver={() => {
        setTextVisibility("visible")
      }}
      onMouseLeave={() => { setTextVisibility("hidden") }}
      style={{ backgroundImage: `url("${bgImg}")`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "contain" }}>
      <div className="gallery-overlay" style={{ visibility: TextVisibility }}>
        <img src={bgImg}></img>
      </div>
    </div>
  )
}
