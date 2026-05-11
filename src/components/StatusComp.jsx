import React from 'react'

const StatusComp = () => {
  return (
    
    <>
    <div className="w-1/2 p-4">
      <h2 className="text-2xl font-bold mb-4">Application Status Overview</h2>
      <div className="bg-gray-900 rounded-xl p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-400">Applied</span>
          <span className="text-sm font-semibold text-yellow-500">5</span>
        </div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-400">Interviewing</span>
          <span className="text-sm font-semibold text-yellow-500">2</span>
        </div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-400">Offered</span>
          <span className="text-sm font-semibold text-yellow-500">  1</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-400">Rejected</span>
          <span className="text-sm font-semibold text-yellow-500">3</span>
        </div>
      </div>
    </div>
    </>
  )
}

export default StatusComp