import { useGetDataForURLQuery } from "../store/slices/api";





export function getDataFromAPI(url) {

    const {data = [] , error}  = useGetDataForURLQuery(url) ;  
    
    if (error ) {
        console.log(error) ;
        return ; 
    }
    
    

   return data  ; 

}