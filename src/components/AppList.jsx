import React from 'react'
import AppCard from './AppCard'

const AppList = ({applications, onDelete}) => {
  if(applications.length === 0) {
    return <div className='text-center text-gray-500'>No applications found. Create one to get started!</div>
  }

  else return (
    <>
      {applications.map(app=> (
        <AppCard key={app._id} app={app} onDelete={onDelete}/>
      ))}
    </>
  )
}

export default AppList