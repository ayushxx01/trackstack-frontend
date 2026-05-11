import React, { useState, useEffect } from 'react'
import AppList from '../components/AppList'
import { deleteApp, getApps, updateApp } from '../services/AppService';
import EditCard from '../components/EditCard';

const AppListPage = () => {
    const[applications, setApplications] = useState();
       const [editApplication, setEditApplication] = useState(null)

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
    <AppList applications={applications} deleteHandler={deleteHandler} onEdit={handleEdit}/>
  </div>
      {editApplication && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <EditCard
          app={editApplication}
          onUpdate={handleUpdate}
          onClose={() => setEditApplication(null)}
        />
      </div>
    )}</>
  )
}

export default AppListPage