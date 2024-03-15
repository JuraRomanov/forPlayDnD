import React from 'react'
import { Link } from 'react-router-dom'
import { Login } from "../../components/Login"
import "./style.css"
function LoginPage() {
  return (
    <div className="login">
          <div className="login__box">
              <h1 className="login__title">
                Войти в аккаунт
              </h1>
              <Login/>
              <span className='login__sub-text'>
                Нет аккаунта ? <Link to={"/register"} className='link' > Зарегестрируйся  </Link> 
              </span>
            </div>
    </div>
  )
}

export default LoginPage