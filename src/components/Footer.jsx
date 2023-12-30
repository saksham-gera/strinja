import React from "react";
import "./Footer.css";
import Feedback from "./Feedback.jsx";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <div className="Footer">
        <div className="feedback-name">feedback</div>
        <div className="Feedbacks">
          <FaArrowCircleLeft className='scroll-buttons' />

          <Feedback initials="J" name="Joe " review="Janwine ART.." />
          <Feedback initials="J" name="Joe " review="Janwine ART freateness fesdnoiewfowne" />
          <Feedback initials="J" name="Joe " review="Janwine ART.." />
          <FaArrowCircleRight className='scroll-buttons' />
        </div>

        <div className="footer-bar" >
          <div className = 'description'>
            <div className="strinja-name">
              strinja
            </div>
            <p> lorem ipsum asds asdsfdsf asdsadd asdasdas asdasdad</p>

            <div className="social-icons">
              <a className='icon' href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
              </a>
              <a className='icon' href="https://www.Linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
              </a>
              <a className='icon' href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
              </a>
              <a className='icon' href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
              </a>

              <span class="cpyRight">
                 &copy; www.strinja.com All Rights Reserved
              </span>
          </div>

        </div>


          <div className="footer-buttons">
            <button>Terms & Conditions </button>
            <button>Privacy Policy </button>
            <button>Contact Us </button>
          </div>




        </div>
      </div>
    </>
  );
}
