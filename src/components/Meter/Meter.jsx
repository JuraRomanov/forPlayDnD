import React, { useState } from 'react'
import "./Meter.css"
function Meter({CountName="" , startValue = 0  , handleClick}) {
    
    const [count , setCount] = useState(startValue) ; 


  return (
    <div className='meter__box'>
        <div className="meter__header">
            <span className='meter__name'>{CountName}</span>
        </div>
        <div className="meter__cont">
            <button onClick={() => {
                if (count+1 >=0  && handleClick(-1,CountName.toLowerCase())   ) { 
                    setCount(count+1); 
                }
                
            }}>+</button>
            <span className='meter__counter'>{count}</span>
            <button  onClick={() => {
                if (count-1 >= 0 && handleClick(1,CountName.toLowerCase())   ) { 
                    setCount(count-1);
                }
            }}>-</button>

        </div>
    </div>
  )
}

export default Meter