import React, { useState } from 'react'

import image from "./source/images2.png";

function GalleryItem({nameCard = "Gallery Item Name", fullData = {} }) {
    const [isActive  , setIsActive] = useState(true)
    let data = [] ;
    

    Object.keys(fullData).map(item => data.push({title : item , value : fullData[item]}))
    

  return (
    <div className={`gallery__item ${isActive?"gallery__item--active" : "" }`} onClick={() => setIsActive(!isActive)}>
        <div className="gallery__main-card">
            <span className="gallery__card-name">{nameCard}</span>
            <img src={image} alt="" className="gallery__card-image"/>
        </div>
        <div className={`gallery__secondary ${!isActive ? "gallery__secondary--hidden" : ""}`}>
            <div className="gallery__secondary-cont">
            {data.map(item => 
                <div className="gallery__secondary-section" key = {`gallerySecondarySection_${item.title}`}>
                    <h3 className="gallery__secondary-section-name">
                        {item.title}
                    </h3>
                    <span className="gallery__secondary-section-value">
                        {item.value}
                    </span>
                </div>
            )}
            </div>
        </div>
    </div>
  )
}

export default GalleryItem