import React from 'react'
import './Aboutus.css'
import 'animate.css'
import Footer from '../../components/Footer'
import NavBar from '../../components/navBar/NavBar';

export default function Aboutus() {
  return (
    <div className='about-us-main'>
      <div className="about-us"> 
          <div className="bg-color"></div>
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

        <div className='vis'>
            <div className='vis-header'>
              <div className="vis-title">VISION</div>
            </div>

            <div className='vis-body'>
              <p>Our vision is to transcend traditional boundaries, pushing the boundaries of string artistry through continuous innovation and a relentless pursuit of aesthetic mastery.  </p>
              <p> Empowering homes and spaces with the enduring beauty of string art, we envision Strinja as a leading global brand synonymous with artistic excellence and meaningful cratfsmanship. </p>
            </div>

        </div>

        <div className='pas'>
            <div className='pas-header'>
              <div className="pas-title">PASSION</div>
              <div className='pas-writing'>Drive to Commitment to STRINJA</div>
            </div>

            <div className='pas-body'>
              <p></p>
              <p>At Strinja, our unwavering commitment to string art is fueled by an intrinsic passion for creativity, craftsmenship, and the transformative power of art. </p>
              <p> We believe that every strand has the potential to tell a unique story. </p>
              <p></p>
              <p>We are not just creators of string art, we are enthusiasts who find joy in the process and fulfillment in knowing that our art resonates with the hearts and minds of those who encounter it.  </p>
              <p></p>
            </div>

        </div>
          
       <Footer/>
      </div>
  );
}
