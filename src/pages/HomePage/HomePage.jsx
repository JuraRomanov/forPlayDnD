import React, { useState } from 'react'
import { Link, useNavigate  } from 'react-router-dom'
import { useEffect } from 'react';
import {useAuth} from "../../hooks/use-auth"

import { removeUser } from '../../store/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Header/Header';
import "./homepage.css"
import {setHero, setParam,loadHero } from '../../store/slices/heroSilce';
import { child, get, getDatabase, ref } from 'firebase/database';
import {  loadHeroFromDB } from '../../hooks/use-dataBase';



function HomePage() {

  
  let navigate = useNavigate() ; 
  const {isAuth,email,id}= useAuth()  ; 
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
    console.log(allData);
    const herosId = Object.keys(allData) ;
    const heroData ={} ; 
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
          (!!hero && hero.length > 0 )? 
          <Link to={`/${id}/newHero/${+Object.keys(hero[hero.length-1])+1}`}> Создать персонажа</Link>
          : <Link to={`/${id}/newHero/0`}>Создать персонажа</Link>
        }
      </div>
    </div>
  )
}

export default HomePage