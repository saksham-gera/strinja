import GalleryCard from "../GalleryCard";
import CreateButton from "../createButton/CreateButton";
import "./GalleryImages.css";
import React from "react";
import { useAuth } from "../../../Authorization/AuthContext";
import { DescriptionOutlined } from "@mui/icons-material";

export default function GalleryImages({ pictures,func,funcCreate,refetch }) {
  const {isLoggedIn } = useAuth();
  const galleryCols1 = [];
  const galleryCols2 = [];
  const galleryCols3 = [];



  console.log(pictures.length);
  let i = 0;
  if(isLoggedIn()) {
    galleryCols1.push(<CreateButton func={funcCreate}/>);
  }

  while (i < pictures.length) {
      galleryCols1.push(
        <GalleryCard Id = {pictures[i].Id} title={pictures[i].Title} bgImg={pictures[i].Url} description={pictures[i].Description} func = {func} />
      );
    i++;
    

    if(i >= pictures.length) break;

    galleryCols2.push(
        <GalleryCard Id = {pictures[i].Id} title={pictures[i].Title} bgImg={pictures[i].Url} description={pictures[i].Description} func = {func} />
    );
    i++;

    if(i >= pictures.length) break;
    

    galleryCols3.push(
        <GalleryCard Id = {pictures[i].Id} title={pictures[i].Title} bgImg={pictures[i].Url} description={pictures[i].Description} func = {func} refetch={refetch} />
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
