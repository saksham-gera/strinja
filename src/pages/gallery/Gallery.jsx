import "./Gallery.css";
import React, { useEffect, useState } from 'react';
import Header from "./header/header";
import GalleryImages from "./galleryImages/GalleryImages";
import Footer from "../../components/Footer";
import ImagePopup from "./imagePopup/ImagePopup";
import AdminImagePopup from "./adminImagePopup/AdminImagePopup";
import CreatePopup from "./createPopup/CreatePopup";

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
  const [ImgPopupDisplay,setImgPopupDisplay] = useState("none");
  const [CreatePopupDisplay,setCreatePopupDisplay] = useState("none");


  const popupData = (imageUrl,tit,dis) => {
    setImg(imageUrl);
    setTitle(tit);
    setImgPopupDisplay(dis);
  }

  const displayFuncImg = (display) => {
    setImgPopupDisplay(display)
  }
  const displayFuncCreate = (display) => {
    setCreatePopupDisplay(display)
  }


  return (
    <div className="gallery">
      <div className="img-pop" style={{display: CreatePopupDisplay}}>
          <CreatePopup displayFunc={displayFuncCreate}/>
        </div>
        <div className="img-pop" style={{display: ImgPopupDisplay}}>
          <AdminImagePopup imageUrl={Img} title={Title} displayFunc={displayFuncImg}/>
        </div>
        <div className="gallery-bg"></div>
        <Header />

        <div className="gallery-heading">Lets Have A Look!</div>
        <GalleryImages func={popupData} funcCreate={displayFuncCreate} pictures={pictures}/>
        <Footer />
    </div>
  )
}
