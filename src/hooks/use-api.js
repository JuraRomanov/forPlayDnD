
import { getAllClasses, getAllRaces } from "../data/api";


export function useApi(){
    
    const races = [] 
    getAllRaces().then(respone => {
          races.push(respone)
    })
    
    const classes = [] 
    getAllClasses().then(respone => {
      classes.push(respone)
    })
    return {races ,classes} ;
}