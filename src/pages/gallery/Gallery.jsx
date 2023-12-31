import "./Gallery.css";
import React from 'react'
import Header from "./header/header";
import GalleryImages from "./galleryImages/GalleryImages";
import Footer from "../../components/Footer";

export default function Gallery() {
  return (
    <div className="gallery">
        <div className="gallery-bg"></div>
        <Header />
        <h3>Lets Have A Look!</h3>
        <GalleryImages />
        <Footer />
    </div>
  )
}
