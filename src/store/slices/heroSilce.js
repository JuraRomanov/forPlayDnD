import {createSlice} from "@reduxjs/toolkit"

const initialState = [];


export const heroSlice = createSlice({
    name : 'hero' , 
    initialState, 
    reducers: { 

        setHero(state,action){ 
            
            state.map(
                hero => { 
                    if(hero.id == action.payload.heroId){ 
                        console.log('id ne unikalen')
                        return ; 
                    }
                }
            )

            state.push({
                id : action.payload.heroId, 
                heroData : { 
                    name : '' , 
                    heroClass : '' , 
                    heroRace : '' ,
                    attributs :  { 
                        'cha' : {
                            sroce : 0 ,
                            modificator : 0, 
                        }, 
                        'con' : {
                            sroce : 0 ,
                            modificator : 0, 
                        }, 
                        'dex' : {
                            sroce : 0 ,
                            modificator : 0, 
                        }, 
                        'int' : {
                            sroce : 0 ,
                            modificator : 0, 
                        }, 
                        'str' : {
                            sroce : 0 ,
                            modificator : 0, 
                        }, 
                        'wis' : {
                            sroce : 0 ,
                            modificator : 0, 
                        }, 
                    }
                }
            })
           
        } , 

        setParam(state,action) {
            console.log(state.length);
            state.map(item => { 
                    if (item.id == action.payload.heroId){ 
                        item.heroData[action.payload.whoSet]= action.payload[action.payload.whoSet];
                        console.log(item.heroData[action.payload.whoSet]);
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


