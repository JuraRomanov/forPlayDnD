import React, { useState } from 'react'
import "./compontents.css"
const Form__login_register = ({textForBtn , handleClick }) => {

    let [email, setEmail] = useState() ;
    let [password, setPassword] = useState() ;


    return (
    <div className="box--login-register">

        <input type="text" 
          onChange={ e => setEmail(e.target.value)}
          
          placeholder='nickname'
        />

        <input type="password" 
          onChange={ e => setPassword(e.target.value)}
          
          placeholder='password'
        />

        <button onClick={() => handleClick(email,password)} className='btn'> 
            {textForBtn}
        </button>

    </div>
  )
}

export {Form__login_register}