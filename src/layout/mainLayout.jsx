import React from 'react'
import NavBarComp from '../components/NavBarComp'
import { Outlet } from 'react-router-dom'
 import { ToastContainer } from 'react-toastify'
 import 'react-toastify/dist/ReactToastify.css';
const MainLayout = () => {
  return (
    <>
        <NavBarComp/>
        <Outlet/>
        <ToastContainer />

    </>
  )
}

export default MainLayout