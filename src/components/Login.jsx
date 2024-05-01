import React, { useEffect } from 'react'
import { Form__login_register } from './Form__login-register'
import { useDispatch,useSelector} from 'react-redux'
import {setUser} from "../store/slices/userSlice"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth';



const Login = () => {
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {isAuth,id} = useAuth() ; 
    useEffect(() => 
    { 
      if (isAuth){ 
        navigate(`/${id}`) ; 
      }
    })
    const handleUser  = (email,password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            
            dispatch(setUser({
              email : user.email, 
              id : user.uid ,
              token : user.accessToken , 
      
              
            }));
            localStorage.isUser = JSON.stringify({email: email , id : user.uid , token : user.accessToken}) ; 
            

            navigate(`/${user.id}`) ; 
          })
        .catch(alert("Не верный логин или пароль"))
        
    } ; 
    return (
    <Form__login_register 
        textForBtn={"Войти"}
        handleClick={handleUser}
    />
  )
}

export {Login}