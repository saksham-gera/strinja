import "./ContactUs.css";
import React from 'react'
import Header from "./header/Header";
import WriteToUs from "./writeToUs/WriteToUs";
import Footer from "../../components/Footer";

export default function ContactUs() {
  return (
    <div className="contact-us">
        <Header />
        <WriteToUs />
        <Footer />
    </div>
  )
}
