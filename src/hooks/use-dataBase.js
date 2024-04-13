import { getDatabase,ref , set} from "firebase/database";



function writeInDatabase(url , obj){ 
    const db = getDatabase() ; 

    set(ref(db, url), obj);
    
    
}

export {writeInDatabase} ; 