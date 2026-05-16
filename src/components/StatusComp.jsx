import { useState, useEffect } from 'react'
import { getStats } from '../services/StatService'
import StatusPie from './StatusPie'
import LocationPie from './LocationPie'


const StatusComp = ({byStatus, byLocation}) => {
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
    <div className=' rounded-xl p-4 flex flex-col gap-3'>
     
   
      <div>
  
        <StatusPie byStatus={byStatus} />
      </div>

      <div>

      
        <LocationPie byLocation={byLocation} />
      </div>
      <div>

      </div>

    </div>
  )
}

export default StatusComp