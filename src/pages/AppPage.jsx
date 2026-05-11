import React, { useEffect, useState } from 'react'
import StatusComp from '../components/StatusComp'
import CreateApp from '../components/CreateApp'
import AppList from '../components/AppList'
import { deleteApp, getApps, updateApp } from '../services/AppService'
import EditCard from '../components/EditCard'


const AppPage = () => {
  return (
  <>
  <div className="flex flex-row">
   <div className="py-20 px-15">
     <CreateApp/>
   </div>
    <StatusComp></StatusComp>
  </div>
 
  </>
  )
}

export default AppPage