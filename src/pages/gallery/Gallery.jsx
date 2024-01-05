import "./Gallery.css";
import React, { useState } from 'react'
import Header from "./header/header";
import GalleryImages from "./galleryImages/GalleryImages";
import Footer from "../../components/Footer";
import ImagePopup from "./imagePopup/ImagePopup";

export default function Gallery() {

  const [Img,setImg] = useState("");
  const [Title,setTitle] = useState("");
  const [Display,setDisplay] = useState("none");

  const popupData = (imageUrl,tit,dis) => {
    setImg(imageUrl);
    setTitle(tit);
    setDisplay(dis);
  }
  
  const displayFunc = (display) => {
    setDisplay(display)
  }

  return (
    <div className="gallery">
        <div className="img-pop" style={{display: Display}}>
          <ImagePopup imageUrl={Img} title={Title} displayFunc={displayFunc}/>
        </div>
        
        <div className="gallery-bg"></div>
        <Header />
        <div className="gallery-heading">Lets Have A Look!</div>
        <GalleryImages func={popupData}/>
        <Footer />
    </div>
  )
}
