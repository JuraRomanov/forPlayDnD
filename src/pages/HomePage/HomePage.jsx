import React from 'react'
import { Link, useNavigate  } from 'react-router-dom'
import { useEffect } from 'react';
import {useAuth} from "../../hooks/use-auth"
import { removeUser, setUser } from '../../store/slices/userSlice';
import { useDispatch } from 'react-redux';
import Header from '../../components/Header/Header';
import "./homepage.css"
import { useGetAllUrlQuery } from '../../store/slices/api';



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

  const hendleClicl= () => {
    dispatch(removeUser()) ; 
  }

 
  
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