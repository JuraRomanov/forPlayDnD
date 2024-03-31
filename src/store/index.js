import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice"; 

import { dndAPI } from "./slices/api";

export const store = configureStore({
    reducer : {
        user : userReducer , 
        [dndAPI.reducerPath] : dndAPI.reducer , 
    } ,

    middleware : (getDefaultMiddleware) =>  getDefaultMiddleware().concat(dndAPI.middleware)
    
});