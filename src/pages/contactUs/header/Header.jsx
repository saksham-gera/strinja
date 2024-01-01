import ContactBox from "./ContactBox";
import "./Header.css";
import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
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
                    <div className="contactus-quote"> Let's Imagine <br /> what's possible</div>
                    <div className="contact-boxes">
                        <ContactBox heading="OUR LOCATION" text="loreavsjbc sbvjkh svkbac svhba sckhb skbadv"/>
                        <ContactBox heading="HOW TO REACH" text="sbjbhakcf sbhjavc asbkvjhd bsahvjk bkshjavm"/>
                    </div>
                </div>
                <div className="social-icons">
                    <NavButton title={<FacebookRoundedIcon />} />
                    <NavButton title={<InstagramIcon />} />
                    <NavButton title={<TwitterIcon />} />
                    <NavButton title={<YouTubeIcon />} />
                </div>
            </div>
        </div>
    </div>
  )
}
