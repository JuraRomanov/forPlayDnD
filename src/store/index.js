import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice"; 
import heroRedcer from "./slices/heroSilce"
import { dndAPI } from "./slices/api";

export const store = configureStore({
    reducer : {
        user : userReducer , 
        hero : heroRedcer , 
        [dndAPI.reducerPath] : dndAPI.reducer , 
    } ,

    middleware : (getDefaultMiddleware) =>  getDefaultMiddleware().concat(dndAPI.middleware)
    
});