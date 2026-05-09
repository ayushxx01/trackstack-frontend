import React from 'react'
import AppCard from './AppCard'

const AppList = ({applications}) => {
  if(applications.length === 0)return (
    <div>No Applications yet</div>
  )

  return (
    <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {applications.map(app=> (
                <AppCard key={app._id} app={app}/>
            ))}
        </div>
    </>
  )
}

export default AppList