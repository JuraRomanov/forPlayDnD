import React from 'react'
import { setHero } from '../store/slices/heroSilce';
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom"; 
function NewHeroWelcome() {

  let {heroId} = useParams() ; 
  
  const dispath = useDispatch() ; 
  dispath(setHero({heroId}))

  return (
    <div>
      sad
    </div>
  )
}

export default NewHeroWelcome