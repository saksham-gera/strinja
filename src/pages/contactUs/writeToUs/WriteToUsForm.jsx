import "./WriteToUsForm.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react'
import WriteToUsInput from "./WriteToUsInput";

export default function WriteToUsForm({title}) {
  return (
    <div className="write-to-us-form">
        <WriteToUsInput title="Your name" id="name"/>
        <WriteToUsInput title="Your email address" id="email"/>
        <WriteToUsInput title="Your phone number" id="phone"/>
        <WriteToUsInput title="Your company" id="company"/>
        <label className="help" htmlFor="help">How can we help you?</label>
        <textarea id="help" className="form-control"></textarea>
    </div>
  )
}
