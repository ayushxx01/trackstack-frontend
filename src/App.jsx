import React from 'react'
import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider, Router } from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import AppPage from './pages/AppPage'
import MainLayout from './layout/mainLayout'
import AppListPage from './pages/AppListPage'
import ColdMailPage from './pages/ColdMailPage'


const App = () => {
  const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* No layout — auth page standalone */}
      <Route path='/' element={<AuthPage />} />

      <Route element={<MainLayout/>}>
        <Route path='/home' element={<AppPage />} />
        <Route path='/apps' element={<AppListPage />} />
        <Route path='/cold-mail' element={<ColdMailPage />} />
      </Route>
    </>
  )

)
  return <RouterProvider router={router} />
}

export default App