import React, { useState } from 'react'
import "./Counter.css";
import CounterItem from './CounterItem';

function Counter({totalScore = 2 , namesCounters = {}}) {


    const [currentScore , setCurrentScore] = useState(totalScore); 

    const handleClick = (value) => { 
            if(currentScore - value >= 0 & currentScore - value <= totalScore ){ 
                setCurrentScore(currentScore-value);
                return true;
            }
            else { 
                return false; 
            }
    }

    return (
        <div className='counter-box'>
            <div className="counter__cont">
                <div className="counter__header">
                    <h3 className='counter__total-score'>Осталось очков : {currentScore}</h3>
                </div>
                <div className="counter__counters-box">
                    {
                        Object.keys(namesCounters).map(attrb => <CounterItem key={`counterItem_${attrb}`} counterName={attrb} handleClick={handleClick} fnSet={namesCounters[attrb].fn} score={namesCounters[attrb].value}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Counter