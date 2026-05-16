import React from 'react'
import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider, Router } from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import AppPage from './pages/AppPage'
import MainLayout from './layout/mainLayout'
import CreateApp from './components/CreateApp'



const App = () => {
  const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* No layout — auth page standalone */}
      <Route path='/' element={<AuthPage />} />

      <Route element={<MainLayout/>}>
        <Route path='/home' element={<AppPage />} />
        <Route path='/create' element={<CreateApp />} />
      </Route>
    </>
  )

)
  return <RouterProvider router={router} />
}

export default App