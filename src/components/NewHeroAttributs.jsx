import React, { useState } from 'react'
import Meter from './Meter/Meter'
import { getDataFromAPI } from '../hooks/use-api';
import {useDispatch,useSelector} from "react-redux"; 
import { setParam } from '../store/slices/heroSilce';
import {useParams} from "react-router-dom"
import { connectStorageEmulator } from 'firebase/storage';
function NewHeroAttributs({score=40}) {

  
    const [totalScore , setTotalSroce] = useState(score);

    const abilites = getDataFromAPI('api/ability-scores')['results']; 

    const {heroId}  = useParams(); 
    const dispasth = useDispatch(); 

    
    let scores = useSelector(state => state.hero) ; 

    scores = scores.filter(item => item.id == heroId);


    scores = JSON.parse(JSON.stringify(scores));

    scores.map(item =>{scores=item.heroData.attributs})

    
    
    
   
    const handleClick = (count , name) =>  {
      
      if (totalScore+count <= score && totalScore+count>=0){ 
        setTotalSroce(totalScore + count) ; 
       
        
        scores[name].score -=count; 
        scores[name].modificator = (Math.floor((scores[name].score - 10) /2));
        dispasth(setParam({heroId , whoSet: 'attributs' , attributs: scores}))
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