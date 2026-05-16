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
  
  const byStatus = applications.reduce((acc, app) => {
  acc[app.status] = (acc[app.status] || 0) + 1;
  return acc;
}, {});
const byLocation = applications.reduce((acc, app) => {
  acc[app.location] = (acc[app.location] || 0) + 1;
  return acc;
}, {});
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
  const totalApps = applications.length;
  return (
  <>

  
  <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mx-5 my-5 " >
    
  {/* LEFT SIDE */}
  <div className="lg:col-span-2 space-y-6">
<>
<div className="flex flex-row justify-between" >
  <h1 className='text-3xl font-bold text-gray-900'>Application Manager</h1>
<button onClick={() => navigate('/create')} className="font-semibold text-indigo-700 transition hover:bg-gray-100">
        Submit New Application
      </button>
</div>
  <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
    <h3 className="text-sm font-bold uppercase tracking-wide text-gray-500">
      Total Apps
    </h3>

    <p className="mt-4 text-5xl font-bold text-indigo-700">
      {totalApps}
    </p>
  </div>
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

   <StatusComp byStatus={byStatus} byLocation={byLocation}/> 
    </div>
  </div>

  </>
  )
}

export default AppPage