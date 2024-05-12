import { useState } from 'react'
import './App.css'
import Layout from './components/Layout/Layout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'

function App() {
  let route=createBrowserRouter([
    {path:'',element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path:'about',element:<About/>},
      {path:'portfolio',element:<Portfolio/>},
      {path:'contact',element:<Contact/>},
    ]}
  ])
  

  return (
    <>
    <RouterProvider router={route}></RouterProvider>
    </>
  )
}

export default App
