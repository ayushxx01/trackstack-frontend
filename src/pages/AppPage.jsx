import React, { useEffect, useState } from 'react'
import { deleteApp, getApps } from '../services/AppService'
import CreateApp from '../components/CreateApp';
import StatusApp from '../components/StatusApp';
import AppList from '../components/AppList';
import { toast } from 'react-toastify';
const AppPage = () => {
  const handleDelete = async (id) => {
    try {
      const res = await deleteApp(id);
      setApplications((prev)=> prev.filter(app=> app._id !== id));
      if(res){
          toast.success('Application deleted successfully!');
      }
  }
  catch(err){
      console.error(err);
      toast.error('Failed to delete application.');
    }
  }
  const[applications, setApplications] = useState([]);
  useEffect(() => {
    const load = async () => {
      const res = await getApps();
      setApplications(res.data);
    };
    load();
  }, []);

  return (
   <>
  <div className="flex gap-6">
    <div className="flex-1">
      <CreateApp/>
    </div>
    <div className="w-72">
      <StatusApp/>
    </div>
  </div>
  <div className="grid grid-cols-2">
    <AppList applications = {applications} onDelete={handleDelete}/>
  </div>
   </>
  )
}

export default AppPage