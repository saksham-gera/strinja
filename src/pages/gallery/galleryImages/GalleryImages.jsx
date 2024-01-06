import GalleryCard from "../GalleryCard";
import CreateButton from "../createButton/CreateButton";
import "./GalleryImages.css";
import React from 'react'

export default function GalleryImages({func, funcCreate}) {
  return (
    <div className="gallery-images">
        <div className="gallery-container">
            <div className="gallery-col">
                <CreateButton func={funcCreate}/>
                <GalleryCard title="first" bgImg="https://www.stonedsanta.in/wp-content/uploads/2019/06/Bicycle-String-Art.jpg" func = {func}/>
                <GalleryCard title="second" bgImg="https://i.etsystatic.com/26434996/r/il/307255/3783701493/il_fullxfull.3783701493_8hbr.jpg" func = {func}/>
                <GalleryCard title="third" bgImg="https://kreateworld.in/cdn/shop/products/7839a190-6424-43a5-8b23-011a489205a2_1000x.png?v=1673431197" func = {func}/>
                <GalleryCard title="fourth" bgImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfxqpmQ0z0wdw8fDkFWBZ-6B6xjWjnvWnc1br-TrO1IHyMaErWwzKVD0vJnFl5FddU1DU&usqp=CAU" func = {func}/>
             </div>
            <div className="gallery-col">
                <GalleryCard title="third" bgImg="https://kreateworld.in/cdn/shop/products/7839a190-6424-43a5-8b23-011a489205a2_1000x.png?v=1673431197" func = {func}/>
                <GalleryCard title="fourth" bgImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfxqpmQ0z0wdw8fDkFWBZ-6B6xjWjnvWnc1br-TrO1IHyMaErWwzKVD0vJnFl5FddU1DU&usqp=CAU" func = {func}/>
                <GalleryCard title="first" bgImg="https://www.stonedsanta.in/wp-content/uploads/2019/06/Bicycle-String-Art.jpg" func = {func}/>
                <GalleryCard title="second" bgImg="https://i.etsystatic.com/26434996/r/il/307255/3783701493/il_fullxfull.3783701493_8hbr.jpg" func = {func}/>
            </div>
            <div className="gallery-col">
                <GalleryCard title="first" bgImg="https://www.stonedsanta.in/wp-content/uploads/2019/06/Bicycle-String-Art.jpg" func = {func}/>
                <GalleryCard title="third" bgImg="https://kreateworld.in/cdn/shop/products/7839a190-6424-43a5-8b23-011a489205a2_1000x.png?v=1673431197" func = {func}/>
                <GalleryCard title="second" bgImg="https://i.etsystatic.com/26434996/r/il/307255/3783701493/il_fullxfull.3783701493_8hbr.jpg" func = {func}/>
                <GalleryCard title="fourth" bgImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfxqpmQ0z0wdw8fDkFWBZ-6B6xjWjnvWnc1br-TrO1IHyMaErWwzKVD0vJnFl5FddU1DU&usqp=CAU" func = {func}/>
            </div>
        </div>
    </div>
  )
}
