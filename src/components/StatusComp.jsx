import { useState, useEffect } from 'react'
import { getStats } from '../services/StatService'


const StatusComp = () => {
  const [stats, setStats] = useState(null)

  useEffect(() => {
    const load = async () => {
      const res = await getStats()
      setStats(res)
    }
    load()
  }, [])

  if(!stats) return <p className='text-gray-400'>Loading...</p>

  return (
    <div className='bg-gray-900 rounded-xl p-4 flex flex-col gap-3'>
      <h2 className='text-white font-bold text-lg'>Stats</h2>
      
      <p className='text-yellow-500'>
        Total: {stats.totalApplications}
      </p>

      <div>
        <p className='text-gray-400 text-sm mb-1'>By Status:</p>
        {Object.entries(stats.byStatus).map(([status, count]) => (
          <p key={status} className='text-white text-sm'>
            {status}: {count}
          </p>
        ))}

        <p className='text-gray-400 text-sm mb-1'>By Locations:</p>
        {Object.entries(stats.byLocation).map(([loc, count]) => (
          <p key={loc} className='text-white text-sm'>
            {loc}: {count}
          </p>
        ))}
      </div>

    </div>
  )
}

export default StatusComp