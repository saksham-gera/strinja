import React from 'react'
import Header from './header/Header'
import "./Home.css";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Footer from '../../components/Footer';
import FeedbackComponent from './feedback/FeedbackComponent';
import { useMediaQuery } from 'react-responsive'

export default function Home() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 600px)' });
    return (
        <div className="home">
            <Parallax pages={isTabletOrMobile ? 3 : 5.32} style={{ backgroundAttachment: "fixed", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", backgroundImage: "url('./assets/achievement-bg.jpg')" }}>
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
                            The concept of string art revolves around simple tools like a wooden board or a canvas, thread and nails.
                            <br /><br /><br />
                            Mary Everest Boole introduced String art in the 19th Century as a way to teach kids more about maths and mathematical formulas.
                        </div>
                        <div className="div4">
                            Each string of art creates thousands of memories, these arts are generally made by unemployed, uneducated women in rural and urban areas with the help of some engineers.
                            <br /><br /><br />
                            Each customer is helping in women empowerment.
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
