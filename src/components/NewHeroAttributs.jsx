import React, { useState } from 'react'
import Meter from './Meter/Meter'

function NewHeroAttributs({score=40}) {
    const [totalScore , setTotalSroce] = useState(score);

    const handleClick = (count) =>  {
        setTotalSroce(totalScore + count) ; 
        console.log(count)
    }
  return (
    <div className='new-hero__attributs'>
            Всего очков {totalScore}
        <Meter CountName={`test`} handleClick = {handleClick}/>
        
    </div>
  )
}

export default NewHeroAttributs