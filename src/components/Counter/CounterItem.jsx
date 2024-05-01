import React from 'react'

function CounterItem({counterName = "Счетчик", score = 0 , fnSet ,handleClick}) {

  const changeValue = (value) =>  { 
    
      if (handleClick(value)) {
        
        fnSet(score+value);
      }
  }
  return (
    <div className='counter__item'>
        <div className="counter__item-header">
            {counterName}
        </div>
        <div className="counter__item-cont">
            <button onClick={() =>changeValue(1)}>+</button>
            <span>{score}</span>
            <button onClick={() =>changeValue(-1)}>-</button>
        </div>
    </div>
  )
}

export default CounterItem