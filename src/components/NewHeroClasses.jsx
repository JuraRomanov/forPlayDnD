import React, {useState } from 'react'
import { getDataFromAPI } from '../hooks/use-api';
import { Buttons } from './buttons/Buttons';
import { setParam } from '../store/slices/heroSilce';
import {useParams} from "react-router-dom"; 
import {useDispatch} from "react-redux";

function NewHeroClasses() {
    const [btnActive , setBtnActive]  = useState('') ; 

    let data = getDataFromAPI('api/classes')['results'] ; 

    let {heroId} = useParams() ; 
    let dispatch = useDispatch() ;


    const handleClick = () => { 
        setBtnActive(event.target.innerHTML)

        dispatch(setParam({whoSet:'heroClass' , heroId ,  heroClass : event.target.innerHTML}))
    }

    
    return (
    <div className='new-hero__classes'>
            
            {(!!data)?
            Object.keys(data).map(
                item => <Buttons text={data[item].name} handleClick={handleClick} classNames={`${btnActive==data[item].name?"buttons--active" : ""}`} key={data[item].index}/>
            )  
            : 
            <h2>loading</h2>
            }
    </div>
  )
}

export default NewHeroClasses