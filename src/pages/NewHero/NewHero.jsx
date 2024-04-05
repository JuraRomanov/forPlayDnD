import React from 'react'
import {useParams , Link } from 'react-router-dom'

import newHeroSteps from '../../data/newHeroSteps' 

import './newHero.css'


function NewHero() {

  let {step,userId} = useParams() ; 
  let {stepTitle , components ,nextStepsName , nextStepsUrl} = newHeroSteps[step]  ; 
  
  return (
    
    <div className="new-hero">
      <div className="new-hero__box">
          <div className="new-hero__header">
              <h1 className="step__title">
                {stepTitle}
              </h1>
          </div>
          <div className="new-hero__cont">
            {components}
          </div>
          <div className="new-hero__footer">
                <h3 >Следующий шаг <span className='step__next'>{`${nextStepsName}`}</span></h3>
                <Link className="link" to={`/${userId}/newHero/${nextStepsUrl}`}> → </Link>
          </div>
      </div>
    </div>

  )
}

export default NewHero


