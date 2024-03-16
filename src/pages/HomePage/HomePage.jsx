import React from 'react'
import { useNavigate  } from 'react-router-dom'
import { useEffect } from 'react';
import {useAuth} from "../../hooks/use-auth"
import { removeUser, setUser } from '../../store/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header/Header';
import "./homepage.css"
import { fetchDnd} from '../../store/slices/dndSlice';
import CardList from '../../components/PersonCard/CardList';

function HomePage() {
  let navigate = useNavigate() ; 
  const {isAuth,email}= useAuth()  ; 
  const dispatch = useDispatch() ;

  
  useEffect(
    () => {    
      if(!isAuth){ 
      navigate('/login');
      } 
      dispatch(fetchDnd('classes')) ; 
      
    }, [dispatch]
  );
   
  const hendleClicl= () => {
    dispatch(removeUser()) ; 
  }
  
  
  // data.items.results.map(e => console.log(e))
  return (  
    <div className='main'>
      <Header/>
      <CardList/>
    </div>
  )
}

export default HomePage