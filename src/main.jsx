import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import {Provider} from "react-redux"


import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import NewHero from './pages/NewHero/NewHero'
import { store } from './store'
import './firebase' ; 



const  roter  = createBrowserRouter([
  {
    path:"/" , 
    element : <LoginPage/> , 
  },
  {
  path:"/:id" , 
  element : <HomePage/> , 
  },
  {
    path: "/:userId/newhero/:step/:heroId",
    element :  <NewHero/>
  },
  
  {
    path:"/login" , 
    element: <LoginPage/>,
  },
  {
    path:"/register" , 
    element: <RegisterPage/>,
  },
  
  

], {basename:"/forPlayDnD"})
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
           <RouterProvider router={roter}/>
      </Provider>
   
  </React.StrictMode>,
)
