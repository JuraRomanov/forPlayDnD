import { createSlice } from "@reduxjs/toolkit";






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
                            cha : 0 , 
                            con : 0 , 
                            dex : 0 , 
                            int : 0 , 
                            str : 0 , 
                            wis : 0 ,

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

        loadHero(state,action){ 
            let flag = false ; 
            state.map(item => { 
                if (!!item[action.payload.heroId]){ 
                    flag = true;
                }
            })
            if (!flag){ 
                state.push({
                [action.payload.heroId]:action.payload.heroData
            })
            }
            
        },

       
    }
})

export const {setHero , setParam, loadHero} = heroSlice.actions ; 

export default heroSlice.reducer


