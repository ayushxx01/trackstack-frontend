import React, { useState, useEffect } from 'react'
import AppList from '../components/AppList'
import { deleteApp, getApps, updateApp } from '../services/AppService';


const AppListPage = () => {
    const[applications, setApplications] = useState();

// handler 2 — save the update
const handleUpdate =(updatedApp) => {
 
  setApplications(prev => prev.map(app => 
    app._id === updatedApp._id ? updatedApp : app
  ))
 // close edit form
}
const deleteHandler = async (id) => {
  console.log('id to delete:', id)
  console.log('current applications:', applications.map(a => a._id))
  await deleteApp(id)
  setApplications(prev => prev.filter(app => {
    console.log('comparing:', app._id, '===', id, ':', app._id === id)
    return app._id !== id
  }))
}
        useEffect(() => {
      const load = async () => {
        const res = await getApps();
            console.log('fetch response:', res) 
        setApplications(res.data);
      }
      load();
    },[])
  return (
    <>
     <div className="">
    <AppList applications={applications} deleteHandler={deleteHandler} onEdit={handleUpdate}/>
  </div>
      </>
  )
}

export default AppListPage