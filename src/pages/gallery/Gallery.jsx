import "./Gallery.css";
import React, { useEffect, useState } from 'react';
import Header from "./header/header";
import GalleryImages from "./galleryImages/GalleryImages";
import Footer from "../../components/Footer";
import ImagePopup from "./imagePopup/ImagePopup";

export default function Gallery() {

  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    fetch('http://localhost:6969/Pictures')  // Replace with your actual endpoint
      .then(response => response.json())
      .then(data => setPictures(data))
      .then(console.log(pictures))
      .catch(error => console.error(error));
  }, []);
  
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
        <GalleryImages func={popupData} pictures={pictures}/>
          
        <Footer />
    </div>
  )
}
