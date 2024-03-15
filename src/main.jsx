import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import {Provider} from "react-redux"


import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import { store } from './store'
import './firebase' ; 

const  roter  = createBrowserRouter([
  {
  path:"/" , 
  element : <HomePage/>
  },
  {
    path:"/login" , 
    element: <LoginPage/>,
  },
  {
    path:"/register" , 
    element: <RegisterPage/>,
  },

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
           <RouterProvider router={roter}/>
      </Provider>
   
  </React.StrictMode>,
)
