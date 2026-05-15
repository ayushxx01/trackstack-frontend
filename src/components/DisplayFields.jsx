import React from 'react'

const DisplayFields = ({ app, deleteHandler, onEdit , setEdit}) => {
  return (
    <div className='bg-gray-900 rounded-xl p-4 flex flex-col gap-2'>
      <h2 className='text-white font-bold text-lg'>{app.companyName}</h2>
      <p className='text-gray-400 text-sm'>{app.position}</p>
      <span className='text-yellow-500 text-sm font-medium'>{app.status}</span>
      <p className='text-gray-500 text-xs'>{app.location}</p>
      <p className='text-gray-500 text-xs'>Applied: {app.appliedDate}</p>
      <p className='text-gray-500 text-xs'>Deadline: {app.deadlineDate}</p>
      <p className='text-gray-400 text-xs'>{app.notes}</p>
      {app.jobLink && (
        <a 
          href={app.jobLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className='text-blue-400 text-xs underline'
        >
          Job Link
        </a>
      )}
      <div className='flex gap-2 mt-2'>
        {/* //passing the whole application to edit page so that we can repopulate the form with existing data */}
        <button onClick={() => setEdit(true)} className='bg-yellow-500 text-black text-xs px-3 py-1 rounded'>Edit</button>
        <button className='bg-red-500 text-white text-xs px-3 py-1 rounded' onClick={() => deleteHandler(app._id)}>Delete</button>
      </div>
    </div>
  )
}

export default DisplayFields