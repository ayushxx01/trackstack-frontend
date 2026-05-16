import React from 'react'

const Filtering = ({ search, setSearch, statusFilter, setStatusFilter }) => {
  return (
    <div className='flex gap-4 mb-6'>
      <input
        type='text'
        placeholder='Search company...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='bg-gray-800 text-white px-4 py-2 rounded-lg outline-none flex-1'
      />
      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        className='bg-gray-800 text-white px-4 py-2 rounded-lg outline-none'
      >
        <option value=''>All Status</option>
        <option value='Applied'>Applied</option>
        <option value='Under Review'>Under Review</option>
        <option value='Interview'>Interview</option>
        <option value='Rejected'>Rejected</option>
        <option value='Accepted'>Accepted</option>
      </select>
    </div>
  )
}

export default Filtering