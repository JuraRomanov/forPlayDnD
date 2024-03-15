import React from 'react'
import { Link } from 'react-router-dom'
import { Signup } from "../../components/Signup"
import "./style.css"
function RegisterPage() {
  return (
    <div className='register'>
      <div className="register__box">
        <h1 className="register__title">Регестрация</h1>
        <Signup/>
        <span className='register__sub-text'>
          Уже есть аккаунт? <Link to={"/login"} className='link' >Войти</Link>
        </span>
      </div>
    </div>
  )
}

export default RegisterPage