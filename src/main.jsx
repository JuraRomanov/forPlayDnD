import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import {Provider} from "react-redux"


import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import NewHeroPage from './pages/NewHeroPage/NewHeroPage'


import { store } from './store'
import './firebase' ; 



const  roter  = createBrowserRouter([
  {
    path:"/" , 
    element : <LoginPage/> , 
  },
  {
  path:"/:userId" , 
  element : <HomePage/> , 
  },
  {
    path : "/:userId/newHero/:heroId",
    element : <NewHeroPage/>
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
