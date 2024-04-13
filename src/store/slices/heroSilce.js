import {createSlice} from "@reduxjs/toolkit"

const initialState = [];


export const heroSlice = createSlice({
    name : 'hero' , 
    initialState, 
    reducers: { 

        setHero(state,action){ 
           
           const flag = state.filter(hero => !!hero[action.payload.heroId]).length == 0 ; 

           if(flag) { 
            state.push({ 
                [action.payload.heroId]: {
                    name: "" , 
                    heroClass :'' , 
                    heroRace : '' ,
                    attributs :  { 
                        'cha' : {
                        score : 0 ,
                        modificator : 0, 
                    }, 
                    'con' : {
                        score : 0 ,
                        modificator : 0, 
                    }, 
                    'dex' : {
                        score : 0 ,
                        modificator : 0, 
                    }, 
                    'int' : {
                        score : 0 ,
                        modificator : 0, 
                    }, 
                    'str' : {
                        score : 0 ,
                        modificator : 0, 
                    }, 
                    'wis' : {
                        score : 0 ,
                        modificator : 0, 
                    }, 
                }
                }
            })
           }

           
           
           
        } , 

        setParam(state,action) {
            
            
            state.map(item => { 
                    
                    if (!!item[action.payload.heroId]){ 
                        item[action.payload.heroId][action.payload.whoSet]= action.payload[action.payload.whoSet];
                    }
            });
        },

        
        removeHero(state){
            state.email = null , 
            state.token = null, 
            state.id = null ,  
            delete localStorage.isUser 
        } ,  
    },
})

export const {setHero , setParam , removeHero} = heroSlice.actions ; 

export default heroSlice.reducer


