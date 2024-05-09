import React from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Form__login_register } from './Form__login-register';
import { setUser } from '../store/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate } from "react-router-dom"
import { useAuth } from '../hooks/use-auth';
import { useEffect } from 'react';
const Signup = () => {

  const dispatch = useDispatch() ; 
  const navigate = useNavigate() ;

  const {isAuth} = useAuth() ; 
    useEffect(() => 
    { 
      if (isAuth){ 
        navigate("/"); 
      }
    })


    async function handleRegister (email,password)  {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then(({user}) => {
      console.log(user) ; 

      dispatch(setUser({
        email : user.email, 
        id : user.uid ,
        token : user.accessToken , 

      }))
      localStorage.isUser = JSON.stringify({email: email , id : user.uid , token : user.accessToken}) ; 

      navigate(`/${user.id}`) ; 
    }).catch(()=> {alert('данный аккаунт существует')})
    
    
} ; 
  return (
    <Form__login_register textForBtn={"Регестрация"} handleClick={handleRegister}/>
  )
}

export {Signup}