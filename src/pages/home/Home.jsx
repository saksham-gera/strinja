import React from 'react'
import Header from './header/Header'
import "./Home.css";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Footer from '../../components/Footer';
import FeedbackComponent from './feedback/FeedbackComponent';
import { useMediaQuery } from 'react-responsive'
import Typewriter from '../../components/typewriter/Typewriter';

export default function Home() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 600px)' });
    return (
        <div className="home">
            <Parallax pages={isTabletOrMobile ? 3 : 5.23} style={{ backgroundAttachment: "fixed", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", backgroundImage: "url('./assets/achievement-bg.jpg')" }}>
                <ParallaxLayer factor={isTabletOrMobile ? 1.5 : 3} style={{ backgroundColor: "#eacaa8" }}>

                </ParallaxLayer>
                <ParallaxLayer>
                    <Header />
                </ParallaxLayer>
               <ParallaxLayer offset={isTabletOrMobile ? 1.5 : 3}>
                    <div className="window-component">
                        <div className="window-text">
                        In the realm of string art, our greatest achievement lies in seamlessly intertwining creativity and precision, transforming simple threads into intricate masterpieces that captivate the eye and celebrate the harmonious marriage of craftsmanship and imagination.                        
                        </div>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={isTabletOrMobile ? 0.5 : 1}  style={{ height: isTabletOrMobile ? "100vh" : "200vh", width: "100vw" }}>
                    <div className="home-images">
                        <div className="div2" style={{ backgroundImage: "url('./assets/home1.jpg')" }}></div>
                        <div className="div3" style={{ backgroundImage: "url('./assets/home2.jpg')" }}></div>
                    </div>

                </ParallaxLayer>
                
                <ParallaxLayer offset={isTabletOrMobile ? 0.5 : 1} speed={isTabletOrMobile ? 0.0 : 0.2} style={{ height: isTabletOrMobile ? "100vh" : "200vh", width: "100vw" }}>
                    <div className="textLayer">
                        <div className="div1">
                            <h3>SAGA of Strings</h3>
                            <Typewriter text="String art is a creative craft that involves arranging and connecting colored threads or strings between fixed points to create visually appealing geometric patterns or images.Mary Everest Boole introduced String art in the 19th Century 
                        " delay="40" />
                        </div>
                        <div className="div4">
                            <h3>Idolization of Strings</h3>
                            <Typewriter text="While string art has historical roots, it has found a place in contemporary art and crafts. Our Artists continue to explore new and innovative ways to use strings and threads in their creations. Each string of art creates thousands of memories. 
                            " delay="40" />
                        </div>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={isTabletOrMobile ? 2 : 4} style={{ backgroundColor: "#eacaa8" }}>
                    <div className="feedback-footer">
                        <FeedbackComponent />
                        <Footer />
                    </div>
                </ParallaxLayer>
            </Parallax>

        </div>
    )
}
