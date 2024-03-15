import React from 'react'
import "./header.css"
import { Buttons } from '../buttons/Buttons'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../../store/slices/userSlice'
function Header() {
    const dispatch = useDispatch(); 
    const handleClick = () => { 
        dispatch(removeUser())
    }
  return (
    <header className='header'>
        <div className="header__box">
            <div className="header__user-info">
                <span className="header__user-name">{useSelector(state=>state.user.email)}</span>
                <Buttons text={"Выйти с аккаунта"} handleClick={handleClick} />
            </div>
        </div>
    </header>
  )
}

export default Header