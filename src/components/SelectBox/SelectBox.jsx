import React, { useState } from 'react'
import SelectBoxItem from './SelectBoxItem'

import arrowUp from "./source/arrow-up.svg";
import arrowDown from "./source/arrow-down.svg"

import "./SelectBox.css"






function SelectBox({defaultValue = "select box" , values ={},setValue = (inputValue) => {console.log(inputValue)}}) {
    const [isActive,setIsActive] = useState(false);
    const [currentValue, setCurrentValue] = useState(defaultValue)


    const changeState = () => { 
        setIsActive(!isActive);
    }
    const handelClick = (value) => { 
            setValue(value);
            setCurrentValue(value); 
            changeState();
    }


    
  return (

    <div className="select-box">
        <div className="select-box__cont">
            <div className={`select-box__currentItem ${isActive?"select-box__currentItem--active":""}`}>
                <SelectBoxItem itemValue={currentValue} handelClick={changeState}/>
                <img src={isActive?arrowUp : arrowDown} alt="↓" className="select-box__arrow" onClick={() => changeState()}/>
            </div>
            <div className={`select-box__other-value-cont ${isActive ? "" : "select-box__other-value-cont--hidden"}`}>
                

                {values.map(value => <SelectBoxItem itemValue={value} handelClick={handelClick} key={`selectBox-${value}}`}/>)}
            </div>
        </div>
    </div>
  )
}

export default SelectBox