import React from 'react'
import { setHero, setParam } from '../store/slices/heroSilce';
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom"; 
function NewHeroWelcome() {

  let {heroId} = useParams() ; 
  
  const dispath = useDispatch() ; 
  dispath(setHero({heroId}))

  return (
    <div>
      <input type="text" onChange={(e) => (dispath(setParam({heroId , whoSet : 'name' , name : e.target.value.trim()})))}/>
    </div>
  )
}

export default NewHeroWelcome