import React, { useState } from 'react'
import EditFields from './EditFields';
import DisplayFields from './DisplayFields';

const AppCard = ({ app, deleteHandler , onEdit}) => {
  const[edit, setEdit] = useState(false);
    const [formData, setFormData] = useState({
        companyName: app.companyName,
        position: app.position,
        status: app.status,
       
        location: app.location,
        appliedDate: app.appliedDate,
        deadlineDate: app.deadlineDate,
        jobLink: app.jobLink,
        notes: app.notes
    })
  return edit ? <EditFields     app={app}
      formData={formData} 
      setFormData={setFormData}
      onEdit={onEdit}
      onCancel={() => setEdit(false)}/> : <DisplayFields app={app} deleteHandler={deleteHandler} onEdit={onEdit} setEdit={setEdit}/>

}

export default AppCard