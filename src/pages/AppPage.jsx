import React, { useEffect, useState } from 'react'
import StatusComp from '../components/StatusComp'
import CreateApp from '../components/CreateApp'
import AppList from '../components/AppList'
import { getApps } from '../services/AppService'

const AppPage = () => {
    const[applications, setApplications] = useState();
    const[editApp, setEditApp] = useState();



    const selectEditApp = (app) => {
        setEditApp(app)
    }

    const updateHandler = (editApp) => {
        
    }

        const addHandler = (app) => {

    }
    useEffect(()=> {
        const load = async ()=> {
            const res = await getApps();
            setApplications(res.data)
        }
        load()
    },[])


  return (
  <>
  <div className="flex flex-row">
   <div className="py-20 px-15">
     <CreateApp ></CreateApp>
   </div>
    <StatusComp></StatusComp>
  </div>
  <div className="">
    <AppList ></AppList>
  </div>
  </>
  )
}

export default AppPage