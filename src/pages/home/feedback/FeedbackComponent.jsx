import "./FeedbackComponent.css";
import { FaArrowCircleLeft } from "react-icons/fa";
import React from 'react'
import FeedbackCard from "./FeedbackCard";


export default function FeedbackComponent() {
  return (
    <div className="feedback-component">
      <div className="feedback-component-child">
        <div className="feedback-component-text">
          Back To Back With Our Customers
        </div>
        <div className="feedbacks">
        <FeedbackCard name="Saksham Gera" review="That Handmade Scenery Was Really Very Awesome" bgImg="./assets/feedback1.jpg"/>
        <FeedbackCard name="Om Ramanuj" review="Uff! That Handcrafted Picture Using Strings" bgImg="./assets/feedback2.jpg"/>
        <FeedbackCard name="Krish Jain" review="Product Was Just As I Imagined And The Service Too Was Satisfactory" bgImg="./assets/feedback3.jpg"/>
        <FeedbackCard name="Shreya Singhal" review="Product And Service Is Really Very Nice" bgImg="./assets/feedback4.jpg"/>
        </div>
      </div>
    </div>
  )
}
