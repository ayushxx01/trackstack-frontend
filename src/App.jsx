import React from 'react'
import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider, Router } from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import HomePage from './pages/HomePage'


const App = () => {
  const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* No layout — auth page standalone */}
      <Route path='/' element={<AuthPage />} />
      <Route path='/home' element={<HomePage/>} />
    </>
  )

)
  return <RouterProvider router={router} />
}

export default App