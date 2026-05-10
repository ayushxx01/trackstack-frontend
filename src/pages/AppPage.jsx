import React, { useEffect, useState } from 'react'
import StatusComp from '../components/StatusComp'
import CreateApp from '../components/CreateApp'
import AppList from '../components/AppList'
import { deleteApp, getApps } from '../services/AppService'

const AppPage = () => {
    const[applications, setApplications] = useState();
   const [editApplication, setEditApplication] = useState(null)

    useEffect(() => {
      const load = async () => {
        const res = await getApps();
            console.log('fetch response:', res) 
        setApplications(res.data);
      }
      load();
    },[])
// handler 1 — set which app is being edited
const handleEdit = (app) => {
  setEditApplication(app)  // store the app to edit
}

// handler 2 — save the update
const handleUpdate = async (updatedApp) => {
  const res = await updateApp(updatedApp._id, updatedApp)
  setApplications(prev => prev.map(app => 
    app._id === res._id ? res : app
  ))
  setEditApplication(null)  // close edit form
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

    const handleAdd = (newApp) => {
      setApplications(prev=> [...prev, newApp]);
    }

  return (
  <>
  <div className="flex flex-row">
   <div className="py-20 px-15">
     <CreateApp onAdd={handleAdd} />
   </div>
    <StatusComp></StatusComp>
  </div>
  <div className="">
    <AppList applications={applications} deleteHandler={deleteHandler}/>
  </div>
  </>
  )
}

export default AppPage