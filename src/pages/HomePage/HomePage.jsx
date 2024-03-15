import React from 'react'
import { useNavigate  } from 'react-router-dom'
import { useEffect } from 'react';
import {useAuth} from "../../hooks/use-auth"
import { removeUser, setUser } from '../../store/slices/userSlice';
import { useDispatch } from 'react-redux';
import Header from '../../components/Header/Header';
import "./homepage.css"

function HomePage() {
  let navigate = useNavigate() ; 
  const {isAuth,email}= useAuth()  ; 
  const dispatch = useDispatch() ;

  
  useEffect(
    () => {    
      if(!isAuth){ 
      navigate('/login');
      } 
    }
  )
   
  const hendleClicl= () => {
    dispatch(removeUser()) ; 
  }

  return (  
    <div className='main'>
      <Header/>
      
    </div>
  )
}

export default HomePage