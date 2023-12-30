import "./ContactBox.css";

import React from 'react'

export default function ContactBox({heading,text}) {
  return (
  <div className="contact-box">
    <div className="contact-box-heading">{heading}</div>
    <div className="contact-box-text">{text}</div>
  </div>
  )
}
