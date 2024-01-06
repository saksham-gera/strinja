import "./Gallery.css";
import React, { useEffect, useState } from 'react';
import Header from "./header/header";
import GalleryImages from "./galleryImages/GalleryImages";
import Footer from "../../components/Footer";

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

  return (
    <div className="gallery">
        <div className="gallery-bg"></div>
        <Header />
        <h3>Lets Have A Look!</h3>
        <GalleryImages pictures={pictures} />
        <Footer />
    </div>
  )
}
