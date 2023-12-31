import "./GalleryCard.css";
import React, { useState } from 'react'


export default function GalleryCard({title,bgImg}) {
    const [TextVisibility, setTextVisibility] = useState("hidden");
  
    return (
      <div className="gallery-card" onMouseOver={() => {setTextVisibility("visible")}} onMouseLeave={() => {setTextVisibility("hidden")}}  style={{backgroundImage:`url("${bgImg}")` , backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"contain"}}>
        <div className="gallery-text" style={{visibility: TextVisibility}}>
            <img src={bgImg}></img>
            <h3>{title}</h3>
        </div>
      </div>
    )
  }
  