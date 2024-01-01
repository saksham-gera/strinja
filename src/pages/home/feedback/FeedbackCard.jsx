import "./FeedbackCard.css"
import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";

export default function FeedbackCard({name,review,bgImg}) {
  const [TextVisibility, setTextVisibility] = useState("visible");

  return (
    <div className="feedback-card" onMouseOver={() => {setTextVisibility("hidden")}} onMouseLeave={() => {setTextVisibility("visible")}}  style={{backgroundImage:`url("${bgImg}")` , backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
      <div className="feedback-text" style={{visibility:TextVisibility}}>
        <div className="name-icon"><FaStar/></div>
        <h3>{name}</h3>
        <div className="review">{review}</div>
      </div>
    </div>
  )
}
