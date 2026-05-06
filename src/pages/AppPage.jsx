import React, { useEffect, useState } from 'react'
import { getApps } from '../services/AppService'
import CreateApp from '../components/CreateApp';
import StatusApp from '../components/StatusApp';
import AppList from '../components/AppList';
const AppPage = () => {
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
    <AppList applications = {applications}/>
  </div>
   </>
  )
}

export default AppPage