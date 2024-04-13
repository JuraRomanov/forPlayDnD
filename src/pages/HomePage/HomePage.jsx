import React from 'react'
import { Link, useNavigate  } from 'react-router-dom'
import { useEffect } from 'react';
import {useAuth} from "../../hooks/use-auth"
import {writeInDatabase} from "../../hooks/use-dataBase"
import { removeUser } from '../../store/slices/userSlice';
import { useDispatch } from 'react-redux';
import Header from '../../components/Header/Header';
import "./homepage.css"




function HomePage() {

  
  let navigate = useNavigate() ; 
  const {isAuth,email,id}= useAuth()  ; 
  const dispatch = useDispatch() ;


  
  useEffect(
    () => {    
      if(!isAuth){ 
      navigate('/login');
      } 
    }
  )


  writeInDatabase('11','11') ; 
  
  
  return (  
    <div className='main'>
      <Header/>
      {
        <Link to={`/${id}/newHero/start/${id}`}> создать персонажа</Link>
      }
    </div>
  )
}

export default HomePage