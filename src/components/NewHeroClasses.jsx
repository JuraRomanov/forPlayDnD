import React, {useState } from 'react'
import { getDataFromAPI } from '../hooks/use-api';
import { Buttons } from './buttons/Buttons';

function NewHeroClasses() {
    const [btnActive , setBtnActive]  = useState('') ; 

    let data = getDataFromAPI('api/classes')['results'] ; 

    const handleClick = () => { 
        setBtnActive(event.target.innerHTML)

        console.log('запись значения')
    }

    
    return (
    <div className='new-hero__classes'>
            
            {(!!data)?
            Object.keys(data).map(
                item => <Buttons text={data[item].name} handleClick={handleClick} classNames={`${btnActive==data[item].name?"buttons--active" : ""}`}/>
            )  
            : 
            <h2>loading</h2>
            }
    </div>
  )
}

export default NewHeroClasses