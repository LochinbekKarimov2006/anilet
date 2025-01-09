import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import MainiLeyout from './layout/MainiLeyout'
import Home from './pages/Home'
import Anime from './pages/Anime'
import Qidiruv from './pages/Qidiruv'
import Layki from './pages/Layki'
import Malumodlarim from './pages/Malumodlarim'
function App() {
  let router= createBrowserRouter([
    {
      path:"/",
      element:<MainiLeyout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/qidiruv",
          element:<Qidiruv/>
        },{
          path:"/animelar",
          element:<Anime/>
        },{
          path:"/layk",
          element:<Layki/>
        },{
          path:"/user",
          element:<Malumodlarim/>
        },
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App