import React, { useState } from 'react'

import iconPlus from "./source/icon-plus.svg"
import iconMinus from "./source/icon-minus.svg"
import { getDataFromAPI } from '../../hooks/use-api'
import {useParams} from "react-router-dom"
import {useDispatch} from "react-redux"
import { setParam } from '../../store/slices/heroSilce'


function AccordionItem({url = ""}) {

  const [isActive , setIsActive] = useState(false)
  let {heroId} = useParams() ; 
  let {name , speed, ability_bonuses} = getDataFromAPI(url); 

  let abilitys = {} ; 

  let dispatch = useDispatch() ; 
  
  if(!!ability_bonuses){ 
    Object.keys(ability_bonuses).map(item => abilitys[item] = ability_bonuses[item]);
  }
  
  const selectValue = (heroRace)=> { 
    setIsActive(!isActive) ;

    dispatch(setParam({heroId,heroRace,whoSet:'heroRace'}))
    
  }
  
  return (
    <div className='accordion__item'>
      <div className="accordion__header" onClick={()=>selectValue(name)}>
        <span className="accordion__name">
            {name}
        </span>
        <img src={(!isActive) ?  iconPlus : iconMinus } className="accordion__toggle" />
      </div>
      <div className={`accordion__cont ${(!isActive) ? "accordion__cont--hidden" : ""}`}>
          <div className="accordion__subitem accordion__subitem--single">
            <span className="subitem__name">
                  скорость 
            </span>
            
            <span>{speed}</span>
            
          </div>
          <div className="accordion__subitem accordion__subitem--common">
            <span className="subitem__name">
                  Бонусы 
            </span>
            
                {
                  Object.keys(abilitys).map(
                    bonus => (
                      <div className="subitem__value" key={abilitys[bonus].ability_score.index}>
                          <span>{abilitys[bonus].ability_score.name}</span>
                          <span>{abilitys[bonus].bonus}</span>
                      </div>
                    )
                  )
                }
            
          </div>
      </div>
    </div>
  )
}

export default AccordionItem