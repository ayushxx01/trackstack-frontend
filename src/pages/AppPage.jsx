import React, { useEffect, useState } from 'react'
import StatusComp from '../components/StatusComp'
import CreateApp from '../components/CreateApp'
import AppList from '../components/AppList'
import { useNavigate } from 'react-router-dom'
import Filtering from '../components/Filtering'
import { deleteApp, getApps } from '../services/AppService'

const AppPage = () => {
    const[applications, setApplications] = useState([]);
      const[statusFilter, setStatusFilter] = useState('')
      const[search, setSearch] = useState('')
  
  
      const filteredApps = applications.filter(app=> {
        const matchesSearch = app.companyName.toLowerCase().includes(search.toLowerCase());
        const status = statusFilter ? app.status === statusFilter : true;
        return matchesSearch && status;
      }) || [];
  
  
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
  const navigate = useNavigate();
  return (
  <>
  <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

  {/* LEFT SIDE */}
  <div className="lg:col-span-2 space-y-6">
<>
    <Filtering
      search={search}
      setSearch={setSearch}
      statusFilter={statusFilter}
      setStatusFilter={setStatusFilter}
    />
    <div className="">
      <AppList applications={filteredApps} deleteHandler={deleteHandler} onEdit={handleUpdate}/>
    </div>
      </>
  </div>

  {/* RIGHT SIDE */}
  <div className="space-y-6">
<button onClick={() => navigate('/create')} className="mt-6 w-full rounded-xl bg-white py-3 font-semibold text-indigo-700 transition hover:bg-gray-100">
        Submit New Application
      </button>
   <StatusComp/>

      {/* Progress */}
      <div className="mt-5 h-3 overflow-hidden rounded-full bg-indigo-400">
        <div className="h-full w-[80%] rounded-full bg-white" />
      </div>

      
    </div>
  </div>

  </>
  )
}

export default AppPage