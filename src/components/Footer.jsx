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
              <a className='icon' href="https://www.instagram.com/strinja.shop" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a className='icon' href="https://www.linkedin.com/in/strinja-shop-b37a7628b/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a className='icon' href="https://www.youtube.com/@strinja" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
              <a className='icon' href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
            </div>
            <span className="cpyRight">
              &copy; www.strinja.com 
            </span>
            <span className="cpyRight">
              All Rights Reserved
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
