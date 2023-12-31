import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <div className="Footer">
        <div className="footer-bar" >
          <div className='description'>
            <div className="strinja-name">
              Strinja
            </div>
            <p>Threaded elegance, where color and precision intertwine gracefully.</p>

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


            </div>
            <span class="cpyRight">
              &copy; www.strinja.com All Rights Reserved
            </span>
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
