import ContactBox from "./ContactBox";
import "./Header.css";
import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import NavButton from "../../../components/navBar/navButtons/navButton/NavButton";
import NavBar from "../../../components/navBar/NavBar";

export default function Header() {
  return (
    <div className="header-contactUs">
        <div className="bg"></div>
        <NavBar />    
        <div className="container-full">
            <div className="container">
                <div className="header-contactus-text">
                    <div className="contactus-quote">Questions? Reach<br /> Out Anytime</div>
                    <div className="contact-boxes">
                        <ContactBox heading="OUR LOCATION" text="Bhabha Bhavan, SVNIT, Surat Gujarat, 395007"/>
                        <ContactBox heading="HOW TO REACH" text="+91 92529 XXXXX Strinja@gmail.com"/>
                    </div>
                </div>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/strinja-shop-b37a7628b/" target="_blank" rel="noopener noreferrer"><NavButton title={<LinkedInIcon />} /></a>
                    <a href="https://www.instagram.com/strinja.shop/" target="_blank" rel="noopener noreferrer"><NavButton title={<InstagramIcon />} /></a>
                    <a target="_blank" rel="noopener noreferrer"><NavButton title={<TwitterIcon />} /></a>
                    <a href="https://www.youtube.com/@strinja" target="_blank" rel="noopener noreferrer"><NavButton title={<YouTubeIcon />} /></a>
                </div>
            </div>
        </div>
    </div>
  )
}
