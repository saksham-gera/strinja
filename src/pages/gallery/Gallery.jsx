import "./Gallery.css";
import React, { useState } from 'react'
import Header from "./header/header";
import GalleryImages from "./galleryImages/GalleryImages";
import Footer from "../../components/Footer";
import ImagePopup from "./imagePopup/ImagePopup";
import AdminImagePopup from "./adminImagePopup/AdminImagePopup";
import CreatePopup from "./createPopup/CreatePopup";

export default function Gallery() {

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
        <GalleryImages func={popupData} funcCreate={displayFuncCreate}/>
        <Footer />
    </div>
  )
}
