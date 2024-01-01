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
        <div className="gallery-heading">Lets Have A Look!</div>
        <GalleryImages />
        <Footer />
    </div>
  )
}
