import "./ContactUs.css";
import React from 'react'
import Header from "./header/Header";
import WriteToUs from "./writeToUs/WriteToUs";

export default function ContactUs() {
  return (
    <div className="contact-us">
        <Header />
        <WriteToUs />
    </div>
  )
}
