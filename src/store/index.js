import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice"
import dndReducer from "./slices/dndSlice";

export const store = configureStore({
    reducer : {
        user : userReducer , 
        dnd : dndReducer , 
    } ,
})