import "./GalleryCard.css";
import React, { useState } from 'react'


export default function GalleryCard({ Id, title, description , bgImg, func,refetch}) {
  const [TextVisibility, setTextVisibility] = useState("hidden");

  return (
    <div className="gallery-card"
      onClick={() => {
        func(bgImg,title,Id,description,"flex")
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
