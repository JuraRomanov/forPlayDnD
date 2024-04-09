import React, { useState } from 'react'
import Meter from './Meter/Meter'
import { getDataFromAPI } from '../hooks/use-api';
function NewHeroAttributs({score=40}) {
    const [totalScore , setTotalSroce] = useState(score);

    const abilites = getDataFromAPI('api/ability-scores')['results']; 

    const handleClick = (count) =>  {

      if (totalScore+count <= score && totalScore+count>=0){ 
        setTotalSroce(totalScore + count) ; 
        
        return true; 
      }
       return false;
      }

    return (
      <div className='new-hero__attributs'>

            Всего очков {totalScore}
            <div className="attributs__cont">
              {
                (!!abilites)? 
                  Object.keys(abilites).map(item => 
                    <Meter CountName={`${abilites[item].name}`} handleClick = {handleClick} key={abilites[item].index}/>
                  )
                :
                <h2>Loading</h2>
              }

            </div>
           
      </div>
    )
}

export default NewHeroAttributs