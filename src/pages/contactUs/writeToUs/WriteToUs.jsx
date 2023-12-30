import "./WriteToUs.css";
import React from 'react'
import WriteToUsForm from "./WriteToUsForm";


export default function WriteToUs() {
  return (
    <div className="write-to-us">
      <div className="write-to-us-sticky">
        <div className="heading">
          Write To Us
        </div>
        <div className="description">
          We are driven by creating experiences that deliver results for your business and your consumers
          <br /><br />
          Our crew is available on weekdays between 9am to 6pm. We usually reply within 2 working days.
        </div>
      </div>
      <WriteToUsForm />
    </div>
  )
}
