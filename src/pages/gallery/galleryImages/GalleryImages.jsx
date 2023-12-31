import GalleryCard from "../GalleryCard";
import "./GalleryImages.css";
import React from 'react'

export default function GalleryImages() {
  return (
    <div className="gallery-images">
        <div className="gallery-container">
            <div className="gallery-col">
                <GalleryCard title="first" bgImg="https://www.stonedsanta.in/wp-content/uploads/2019/06/Bicycle-String-Art.jpg"/>
                <GalleryCard title="second" bgImg="https://i.etsystatic.com/26434996/r/il/307255/3783701493/il_fullxfull.3783701493_8hbr.jpg"/>
                <GalleryCard title="third" bgImg="https://kreateworld.in/cdn/shop/products/7839a190-6424-43a5-8b23-011a489205a2_1000x.png?v=1673431197" />
                <GalleryCard title="fourth" bgImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfxqpmQ0z0wdw8fDkFWBZ-6B6xjWjnvWnc1br-TrO1IHyMaErWwzKVD0vJnFl5FddU1DU&usqp=CAU" />
             </div>
            <div className="gallery-col">
                <GalleryCard title="third" bgImg="https://kreateworld.in/cdn/shop/products/7839a190-6424-43a5-8b23-011a489205a2_1000x.png?v=1673431197" />
                <GalleryCard title="fourth" bgImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfxqpmQ0z0wdw8fDkFWBZ-6B6xjWjnvWnc1br-TrO1IHyMaErWwzKVD0vJnFl5FddU1DU&usqp=CAU" />
                <GalleryCard title="first" bgImg="https://www.stonedsanta.in/wp-content/uploads/2019/06/Bicycle-String-Art.jpg"/>
                <GalleryCard title="second" bgImg="https://i.etsystatic.com/26434996/r/il/307255/3783701493/il_fullxfull.3783701493_8hbr.jpg"/>
            </div>
            <div className="gallery-col">
                <GalleryCard title="first" bgImg="https://www.stonedsanta.in/wp-content/uploads/2019/06/Bicycle-String-Art.jpg"/>
                <GalleryCard title="third" bgImg="https://kreateworld.in/cdn/shop/products/7839a190-6424-43a5-8b23-011a489205a2_1000x.png?v=1673431197" />
                <GalleryCard title="second" bgImg="https://i.etsystatic.com/26434996/r/il/307255/3783701493/il_fullxfull.3783701493_8hbr.jpg"/>
                <GalleryCard title="fourth" bgImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfxqpmQ0z0wdw8fDkFWBZ-6B6xjWjnvWnc1br-TrO1IHyMaErWwzKVD0vJnFl5FddU1DU&usqp=CAU" />
            </div>
        </div>
    </div>
  )
}
