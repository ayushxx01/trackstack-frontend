import { updateApp } from '../services/AppService'

const EditFields = ({ app, formData, setFormData, onEdit, onCancel }) => {

  const handleSave = async () => {
    const res = await updateApp(app._id, formData)
    onEdit(res)
    onCancel()
  }

  const inputClass = 'w-full bg-gray-800 text-white text-sm px-3 py-2 rounded-lg outline-none focus:ring-1 focus:ring-yellow-500'
  const labelClass = 'text-gray-400 text-xs mb-1'

  return (
    <div className='bg-gray-900 rounded-xl p-4 flex flex-col gap-3 border border-yellow-500/30'>
      
      <div className='flex justify-between items-center mb-1'>
        <span className='text-yellow-500 text-xs font-semibold tracking-wide uppercase'>Editing</span>
        <button onClick={onCancel} className='text-gray-500 hover:text-white text-xs'>✕ Cancel</button>
      </div>

      <div>
        <p className={labelClass}>Company Name</p>
        <input
          className={inputClass}
          value={formData.companyName}
          onChange={(e) => setFormData({...formData, companyName: e.target.value})}
        />
      </div>

      <div>
        <p className={labelClass}>Position</p>
        <input
          className={inputClass}
          value={formData.position}
          onChange={(e) => setFormData({...formData, position: e.target.value})}
        />
      </div>

      <div>
        <p className={labelClass}>Status</p>
        <select
          className={inputClass}
          value={formData.status}
          onChange={(e) => setFormData({...formData, status: e.target.value})}
        >
          <option value="Applied">Applied</option>
          <option value="Under Review">Under Review</option>
          <option value="Interview">Interview</option>
          <option value="Rejected">Rejected</option>
          <option value="Accepted">Accepted</option>
        </select>
      </div>

      <div>
        <p className={labelClass}>Location</p>
        <input
          className={inputClass}
          value={formData.location}
          onChange={(e) => setFormData({...formData, location: e.target.value})}
        />
      </div>

      <div>
        <p className={labelClass}>Applied Date</p>
        <input
          type='date'
          className={inputClass}
          value={formData.appliedDate ? formData.appliedDate.split('T')[0] : ''}
          onChange={(e) => setFormData({...formData, appliedDate: e.target.value})}
        />
      </div>

      <div>
        <p className={labelClass}>Deadline Date</p>
        <input
          type='date'
          className={inputClass}
          value={formData.deadlineDate ? formData.deadlineDate.split('T')[0] : ''}
          onChange={(e) => setFormData({...formData, deadlineDate: e.target.value})}
        />
      </div>

      <div>
        <p className={labelClass}>Job Link</p>
        <input
          className={inputClass}
          value={formData.jobLink}
          onChange={(e) => setFormData({...formData, jobLink: e.target.value})}
        />
      </div>

      <div>
        <p className={labelClass}>Notes</p>
        <textarea
          className={inputClass}
          rows={2}
          value={formData.notes}
          onChange={(e) => setFormData({...formData, notes: e.target.value})}
        />
      </div>

      <button
        onClick={handleSave}
        className='w-full bg-yellow-500 text-black text-sm font-bold py-2 rounded-lg hover:bg-yellow-400 transition-colors mt-1'
      >
        Save Changes
      </button>

    </div>
  )
}

export default EditFields