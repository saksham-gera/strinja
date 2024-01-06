import GalleryCard from "../GalleryCard";
import "./GalleryImages.css";
import React from "react";

export default function GalleryImages({ pictures }) {

  const galleryCols1 = [];
  const galleryCols2 = [];
  const galleryCols3 = [];

  console.log(pictures.length);
  let i = 0;

  while (i < pictures.length) {

    galleryCols1.push(
        <GalleryCard title={pictures[i].Title} bgImg={pictures[i].Url func = {func}} />
    );
    i++;

    if(i >= pictures.length) break;

    galleryCols2.push(
        <GalleryCard title={pictures[i].Title} bgImg={pictures[i].Url func = {func}} />
    );
    i++;

    if(i >= pictures.length) break;
    

    galleryCols3.push(
        <GalleryCard title={pictures[i].Title} bgImg={pictures[i].Url func = {func}} />
    );
    i++;
  }

  return (
    <div className="gallery-images">
      <div className="gallery-container">
        
      <div className="gallery-col">
         {galleryCols1}
       </div>
       <div className="gallery-col">
         {galleryCols2}
       </div>
       <div className="gallery-col">
         {galleryCols3}
       </div>

      </div>
    </div>
  );
}
