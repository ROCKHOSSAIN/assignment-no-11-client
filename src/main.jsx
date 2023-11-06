import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import LlibraryRoute from './Components/Routes/LlibraryRoute'
import AuthProvider from './Components/Provider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={LlibraryRoute}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
