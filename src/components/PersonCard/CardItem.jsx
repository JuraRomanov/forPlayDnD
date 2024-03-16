import React from 'react'

function CardItem({raceName , raceUrl}) {
  return (
    <li key={`li-${raceName}`}>
        <p>{raceName}</p>
        <p>{raceUrl}</p>
    </li>
  )
}

export default CardItem