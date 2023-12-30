import "./FeedbackComponent.css";
import Feedback from "./Feedback.jsx";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import React from 'react'

export default function FeedbackComponent() {
  return (
    <div className="feedback-component">
        <div className="feedback-name">feedback</div>
        <div className="Feedbacks">
          <FaArrowCircleLeft className='scroll-buttons' />
          <Feedback initials="J" name="Joe " review="Janwine ART.." />
          <Feedback initials="J" name="Joe " review="Janwine ART freateness fesdnoiewfowne" />
          <Feedback initials="J" name="Joe " review="Janwine ART.." />
          <FaArrowCircleRight className='scroll-buttons' />
        </div>
    </div>
  )
}
