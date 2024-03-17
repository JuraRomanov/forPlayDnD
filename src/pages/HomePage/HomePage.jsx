import React, { useState } from 'react'
import { useNavigate  } from 'react-router-dom'
import { useEffect } from 'react';
import {useAuth} from "../../hooks/use-auth"
import { removeUser, setUser } from '../../store/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header/Header';
import "./homepage.css"
import { getAllRaces } from '../../data/api';
import { useApi } from '../../hooks/use-api';



function HomePage() {
  let navigate = useNavigate() ; 
  const {isAuth,email}= useAuth()  ; 
  const dispatch = useDispatch() ;
  
  const {races,classes} = useApi()
  useEffect(
    () => {    
      if(!isAuth){ 
      navigate('/login');
      } 
    }, [dispatch]
  );
   
  


  
  const hendleClicl= () => {
    // classes[0].map(e => console.log(e)) 
  }
  

  return (  
    <div className='main'>
      <Header/>

      <button onClick={hendleClicl}>131</button>
    </div>
  )
}

export default HomePage