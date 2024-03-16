import React from 'react'
import CardItem from './CardItem'
import {useDispatch, useSelector } from 'react-redux'
import { fetchDnd } from '../../store/slices/dndSlice'

function CardList() {
 const dispatch = useDispatch () 
 const  data = useSelector(state => state.dnd.items.results)
 console.log(!!data) 
 const handleClick = () => {
    dispatch(fetchDnd('races')) ; 

 }
 if (!!data) { 
 return (
    <ul>
        {   
            data.map((race) =>(
                <CardItem 
                    key={`race-${race.index}`}
                    raceName={race.index}
                    raceUrl={race.url}
                />
            ))
        }
        <button onClick={handleClick}></button>
    </ul>
  )
}
    else{
        return <ul></ul>
    }
}
export default CardList