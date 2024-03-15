import React from 'react'
import "./buttons.css"
function Buttons({text , handleClick}) {
  return (
    <button onClick={handleClick} className='buttons'>{text}</button>
  )
}

export {Buttons}