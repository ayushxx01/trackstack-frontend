import { useState, useEffect } from 'react'
import { getStats } from '../services/StatService'
import StatusPie from './StatusPie'
import LocationPie from './LocationPie'


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
        <StatusPie byStatus={stats.byStatus} />
      </div>

      <div>

        <p className='text-gray-400 text-sm mb-1'>By Locations:</p>
        <LocationPie byLocation={stats.byLocation} />
      </div>
      <div>

      </div>

    </div>
  )
}

export default StatusComp