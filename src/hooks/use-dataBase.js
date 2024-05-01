import { child, get, getDatabase,ref,set,push, onValue} from "firebase/database";
import { useState} from "react";
import fireBase from "../firebase";
import firebase from "firebase/compat/app";


const database = fireBase;





 async function loadHeroFromDB(userId) { 
  
  
              
  const url = `https://forplaydnd-default-rtdb.europe-west1.firebasedatabase.app/userHero/${userId}/.json`;
  const response = await fetch(url);
  
  return await response.json();
};

function writeHero(url  , obj){ 
   
    set(ref(database, url), obj); 
   
    return true ;
      
};

function addHeroToList(userId ,heroId){ 
  set(ref(fireBase,`heroList/${userId}/${heroId}`),heroId)
} 

export {writeHero,addHeroToList,loadHeroFromDB} ; 