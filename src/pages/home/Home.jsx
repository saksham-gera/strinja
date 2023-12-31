import React from 'react'
import Header from './header/Header'
import "./Home.css";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Footer from '../../components/Footer';
import FeedbackComponent from '../../components/feedback/FeedbackComponent';

export default function Home() {
    return (
        <div className='home'>
            <Parallax pages={5} style={{backgroundColor:"#a1866a"}}>
                <ParallaxLayer >
                    <Header />
                </ParallaxLayer>
                <ParallaxLayer offset={1} >
                    <div className="textLayer">
                        <div className="div1">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit commodi, assumenda inventore praesentium, repellat deserunt nesciunt voluptas sit dignissimos, corporis ut saepe ipsam adipisci maiores unde optio perferendis laborum quas fugiat architecto mollitia! Voluptatum consectetur perferendis ex corporis aliquid dolorem mollitia reprehenderit architecto porro officia, beatae et aspernatur, nemo quaerat.
                        </div>
                        <div className="div4">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolor, alias officiis nulla veniam quos quas laboriosam repellendus nobis praesentium ipsa non, corrupti ex expedita quae optio vitae fugit necessitatibus esse nam illum doloremque recusandae nesciunt! Harum quae quasi perspiciatis. Molestiae facilis consequuntur asperiores qui repellat quam incidunt saepe natus!
                        </div>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={0.5} style={{height:"200vh",width:"100vw"}}> 
                    <div className="div2" style={{backgroundImage:"url('https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1500,w_2000,f_auto,q_1/996648/IMG_2973_btyu0t.jpg')"}}></div>
                    <div className="div3" style={{backgroundImage:"url('https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1500,w_2000,f_auto,q_1/996648/IMG_1824_a1oavz.jpg')"}}></div>
                </ParallaxLayer>
                <ParallaxLayer offset={3} style={{backgroundColor:"#a1866a"}}>
                    <FeedbackComponent />
                    <Footer />
                </ParallaxLayer>
            </Parallax>
            
        </div>
    )
}
