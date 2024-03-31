import React from 'react'
import { useNavigate  } from 'react-router-dom'
import { useEffect } from 'react';
import {useAuth} from "../../hooks/use-auth"
import { removeUser, setUser } from '../../store/slices/userSlice';
import { useDispatch } from 'react-redux';
import Header from '../../components/Header/Header';
import "./homepage.css"
import { useGetAllUrlQuery } from '../../store/slices/api';



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
  const  {data = [] , isLoading} = useGetAllUrlQuery() ; 

  const hendleClicl= () => {
    dispatch(removeUser()) ; 
  }

  if(isLoading) { 
    return (<h1> Loading </h1>)
  }
  
  return (  
    <div className='main'>
      <Header/>
      {
        Object.keys(data).map(item => (
          <li key={item} > {`${item}: ${data[item]}`} </li>
        ))
      }
    </div>
  )
}

export default HomePage