import React from 'react'
import './createPerson.css'
import { getDataFromAPI } from '../../hooks/use-api'
function CreatePersonPage() {

  const racesList  = getDataFromAPI('api/races') ; 

  if (!!!racesList)  { 
    return ( <div className='createPerson'>
        Loaded 
    </div>)
  }
  return (
    <div className='createPerson'>
        <ul>
            {racesList.map(race => (
                <li key={race.index}>{race.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default CreatePersonPage