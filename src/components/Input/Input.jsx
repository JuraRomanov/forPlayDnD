import React, { useState } from 'react'
import "./Input.css";




function Input({placeholderValue = "input box" ,setValue = (inputValue) => {console.log(inputValue)}}) {
    const [currentValue ,setCurrentValue] = useState("");

    const changeValue = (value) => { 
        setCurrentValue(value);
        setValue(value)
    }
    return (
        <div className='input-box'>
            <div className="input-box__cont">

                <input type="text" placeholder={placeholderValue} 
                value={currentValue} 
                onChange={() => changeValue(event.target.value)} 
                className='input-box__input'
                />

            </div>
        </div>
    )
}

export default Input