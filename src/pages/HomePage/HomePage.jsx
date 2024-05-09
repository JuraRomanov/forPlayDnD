import React from 'react'
import { useNavigate  } from 'react-router-dom'
import { useEffect } from 'react';
import {useAuth} from "../../hooks/use-auth"

import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Header/Header';
import "./homepage.css"
import {loadHero } from '../../store/slices/heroSilce';

import {  loadHeroFromDB } from '../../hooks/use-dataBase';
import Gallery from '../../components/Gallery/Gallery';




function HomePage() {

  
  let navigate = useNavigate() ; 
  const {isAuth,id}= useAuth()  ; 
  const dispatch = useDispatch() ;
  
  
  useEffect(
    () => {    
      if(!isAuth){ 
      navigate('/login');
      
    }
  })
  const fn = (allData ) => { 
    if(!!!allData) { 
      return; 
    }
    
    const herosId = Object.keys(allData) ;
   
    herosId.map(heroId => {
      dispatch(loadHero({heroId , heroData : allData[heroId]}));
    })
    
  }
  
  loadHeroFromDB(id).then(
    item => fn(item)
  );
  
  
  const hero = useSelector(item => item.hero); 
  
  return (  
    <div className='main'>
      <Header/>
      
      <div>
        
        { 
          (!!hero && hero.length > 0 )? <Gallery isAdd = {true} galleryData={hero} galleryName='галерея персонажей'/> : <Gallery isAdd = {true} galleryName='галерея персонажей'/>
        }
      </div>
    </div>
  )
}

export default HomePage