import "./Gallery.css";
import React, { useEffect, useState } from 'react';
import Header from "./header/header";
import GalleryImages from "./galleryImages/GalleryImages";
import Footer from "../../components/Footer";
import ImagePopup from "./imagePopup/ImagePopup";
import AdminImagePopup from "./adminImagePopup/AdminImagePopup";
import CreatePopup from "./createPopup/CreatePopup";
import { useAuth } from "../../Authorization/AuthContext.jsx";

export default function Gallery() {
  const {isLoggedIn } = useAuth();
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    fetch('http://localhost:6969/Pictures')  // Replace with your actual endpoint
      .then(response => response.json())
      .then(data => setPictures(data))
      .then(console.log(pictures))
      .catch(error => console.error(error));
  }, []);
  
  const [Id,setId] = useState("");
  const [Img,setImg] = useState("");
  const [Title,setTitle] = useState("");
  const [ImgPopupDisplay,setImgPopupDisplay] = useState("none");
  const [CreatePopupDisplay,setCreatePopupDisplay] = useState("none");
  const [Description,setDescription] = useState("");

  const popupData = (imageUrl,tit,Id,description,dis) => {
    setImg(imageUrl);
    setTitle(tit);
    setId(Id);
    setDescription(description);
    setImgPopupDisplay(dis);
  }

  const fetch = () => {
    fetch('http://localhost:6969/Pictures')  // Replace with your actual endpoint
    .then(response => response.json())
    .then(data => setPictures(data))
    .then(console.log(pictures))
    .catch(error => console.error(error));
}, []
  }

  const displayFuncImg = (display) => {
    setImgPopupDisplay(display)
  }
  const displayFuncCreate = (display) => {
    setCreatePopupDisplay(display)
  }

  const imagePopup = isLoggedIn() ? <AdminImagePopup Id={Id} description={Description} imageUrl={Img} title={Title} displayFunc={displayFuncImg} refetch={fetch}/> : <ImagePopup Id={Id} description={Description} imageUrl={Img} title={Title} displayFunc={displayFuncImg}/> ;
  return (
    <div className="gallery">
      <div className="img-pop" style={{display: CreatePopupDisplay}}>
          <CreatePopup displayFunc={displayFuncCreate}/>
        </div>
        <div className="img-pop" style={{display: ImgPopupDisplay}}>
          {imagePopup}
        </div>
        <div className="gallery-bg"></div>
        <Header />

        <div className="gallery-heading">Lets Have A Look!</div>
        <GalleryImages func={popupData} funcCreate={displayFuncCreate} pictures={pictures} refetch={fetch} />
        <Footer />
    </div>
  )
}
