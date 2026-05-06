import React from 'react'

const AppCard = ({app}) => {
    return (
    <div className='bg-gray-900 rounded-xl p-4 flex flex-col gap-2'>
      <h2 className='text-white font-bold text-lg'>{app.companyName}</h2>
      <p className='text-gray-400 text-sm'>{app.position}</p>
      <span className='text-yellow-500 text-sm'>{app.status}</span>
      <p className='text-gray-500 text-xs'>{app.location}</p>
      <p className='text-gray-500 text-xs'>{app.appliedDate}</p>
      <p className='text-gray-500 text-xs'>{app.notes}</p>
      <p className='text-gray-500 text-xs'>{app.deadlineDate}</p>
      <p className='text-gray-500 text-xs'>{app.coldmailStatus}</p>
      <p className='text-blue-500 text-xs underline'>jobLink</p>
    </div>
  )
}

export default AppCard