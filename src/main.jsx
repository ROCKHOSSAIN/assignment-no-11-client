import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import LlibraryRoute from './Components/Routes/LlibraryRoute'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={LlibraryRoute}></RouterProvider>
  </React.StrictMode>,
)
