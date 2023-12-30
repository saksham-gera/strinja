import "./WriteToUsInput.css"
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

export default function WriteToUsInput({title,id}) {
  return (
    <div className='write-to-us-input'>
        <label htmlFor={id}>{title}</label>
        <input id={id} className="form-control"></input>
    </div>
  )
}
