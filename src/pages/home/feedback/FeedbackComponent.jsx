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
        <FeedbackCard name="Saksham Gera" review="That Handmade Scenery Was Really Very Awesome" bgImg="https://upload.wikimedia.org/wikipedia/en/f/f7/StringArt.jpg"/>
        <FeedbackCard name="Om Ramanuj" review="Uff! That Handcrafted Picture Using Strings" bgImg="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81bdMHVT+mL._AC_UF1000,1000_QL80_.jpg"/>
        <FeedbackCard name="Krish Jain" review="Product Was Just As I Imagined And The Service Too Was Satisfactory" bgImg="https://d35l77wxi0xou3.cloudfront.net/opencart/image/productFromFeb2020/String%20art%201597481408-600x600.jpg"/>
        <FeedbackCard name="Shreya Singhal" review="Product And Service Is Really Very Nice" bgImg="https://images-cdn.ubuy.co.in/63d6dc9123b7e56d9d5244a8-baosity-vintage-string-craft-geometric-d.jpg"/>
        </div>
      </div>
    </div>
  )
}
