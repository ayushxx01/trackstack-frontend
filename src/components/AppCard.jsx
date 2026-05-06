import React from 'react'
import { deleteApp } from '../services/AppService'
import { toast } from 'react-toastify';

const AppCard = ({app, onDelete}) => {

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
      <button onClick={()=> onDelete(app._id)} className='bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600'>
        Delete
      </button>
    </div>
  )
}

export default AppCard