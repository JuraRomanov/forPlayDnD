import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { json, useParams } from 'react-router-dom'
import { addHeroToList, writeHero } from '../hooks/use-dataBase';

function NewHeroFinish() {


    

    const {userId , heroId } = useParams() ;
    
    const hero = useSelector(state => state.hero).filter(hero => !!hero[heroId]);

    
    
    const handleClick = () => { 
        if(writeHero(`userHero/${userId}/${heroId}`, hero[0][heroId])){ 
            
        }
    }   

    return (
        <div>
            <button onClick={handleClick}>write hero</button>
        </div>
    )
}

export default NewHeroFinish