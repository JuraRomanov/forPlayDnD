import React, { useEffect } from 'react'
import AccordionItem from './AccordionItem'

import "./accordions.css" ; 
import { getDataFromAPI } from '../../hooks/use-api';


function Accordion({url}) {
  let data = getDataFromAPI(url)['results'] ; 

  
 
   
  return (
    <div className='accordion__box'> 
    {(!!data)?Object.keys(data).map(item =>  <AccordionItem url={data[item].url}/> ) : "loading" } 
    </div>
    
  )
}
 
export default Accordion