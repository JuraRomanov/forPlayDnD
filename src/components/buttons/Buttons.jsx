import React from 'react'
import "./buttons.css"
function Buttons({text , handleClick , classNames=""}) {
  return (
    <button onClick={handleClick} className={`buttons ${classNames}`}>{text}</button>
  )
}

export {Buttons}