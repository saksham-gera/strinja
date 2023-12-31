import React from 'react'
import './Aboutus.css'
import 'animate.css'
import Footer from '../../components/Footer'
import NavBar from '../../components/navBar/navBar'

export default function Aboutus() {
  return (
    <>
      <div className="about-us"> 

          <div className="images">
            <div className="img"> </div>
            <div className="img2"> </div>
            <div className="blur"> </div>
          </div>

          <NavBar/>

          <div className="text">
            <div className='title'>About Us</div>
            <div className='writing'>Empowering change,</div>
          <div className='writing'> inspiring progress</div>
          </div>

        </div>
          {/* about us 2nd page  */}
        <div className='mis'>
            <div className='mis-header'>
              <div className="mis-title">Mission</div>
              <div className='mis-writing'>Pursuit of strinja</div>
            </div>

            <div className='mis-body'>
              <p>At Strinja, our mission is to weave creativity into the fabric of everyday life through the timeless artistry of string. </p>
              <p> We are dedicated to crafting unique and personalized string art pieces that inspire self-expression, evoke emotion, and bring joy to our customers. </p>
              <p>With a commitment to qualify craftsmenship and innovation. </p>
            </div>

        </div>
          
       <Footer/>
      </>
  );
}
