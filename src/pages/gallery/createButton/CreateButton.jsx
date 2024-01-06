import "./CreateButton.css";
import React, { useState } from 'react'


export default function CreateButton({func}) {
  return (
    <div className="create-button-parent">
      <div className="create-button"
      onClick={() => {
        func("flex")
      }} >
      <div className="create-overlay">
        <img src={"./assets/plus.png"}></img>
      </div>
    </div>
    <div className="create-overlay">
    
  </div>
    </div>
    
  )
}