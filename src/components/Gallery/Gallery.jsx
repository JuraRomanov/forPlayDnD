import React from 'react'
import "./Gallery.css"
import GalleryItem from './GalleryItem'

import newCard from "./source/plus.svg"
import { useNavigate, useParams } from 'react-router-dom'
function Gallery({isAdd = false  , galleryData = {} , galleryName = 'Галерея'}) {

  const navigate = useNavigate() ;
  const {userId} = useParams()
  let data = [] ; 
  
  Object.keys(galleryData).map(key => { 
    Object.values(galleryData[key]).map(item => {
      data.push(item);
    })
  })  
  
  const fn = () => { 
    if (data.length==0){ 
      navigate(`/${userId}/newHero/0`);
    }
    else { 
      const keys = Object.keys(galleryData); 
      navigate(`/${userId}/newHero/${+keys[keys.length-1]+1}`);
    }
  }
  

  return (
    <div className='gallery__box'>
        <h2>{galleryName}</h2>
        <div className="gallery__cont">
            {
              data.map(card => <GalleryItem nameCard={card.name} fullData={card} key={`galleryItem_${card.name}`}/>)         
            }
            {
              isAdd ? 
              <div className="gallery__item">
                <div className="gallery__main-card gallery__main-card--new">
                  <img src={newCard} alt="" className="gallery__card-image gallery__card-image--new-card" onClick={() => fn()}/>
                </div>
              </div> : 
              console.log()
            }  

            
            
        </div>
    </div>
  )
}

export default Gallery