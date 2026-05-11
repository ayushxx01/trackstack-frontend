import React, { useState } from 'react'
import { updateApp } from '../services/AppService';

//app is the data, onUpdate is the handler to call when we want to save the update, onClose is to close the edit form without saving
const EditCard = ({ app, onUpdate, onClose }) => {
    const [formData, setFormData] = useState({
        companyName: app.companyName,
        position: app.position,
        status: app.status,
        coldMailStatus: app.coldMailStatus,
        location: app.location,
appliedDate: app.appliedDate ? app.appliedDate.split('T')[0] : '',
deadlineDate: app.deadlineDate ? app.deadlineDate.split('T')[0] : '',
        jobLink: app.jobLink,
        notes: app.notes
    });

    const onSubmit = async (e) => {
        e.preventDefault()
       
          onUpdate({
        ...formData,
        _id: app._id
    });
        onClose()
    }
  return (
     <>
            <div className='text-white text-2xl font-bold mb-4'>
                Edit Application
            </div>

            <form
                className='bg-gray-900 rounded-xl p-4 flex flex-col gap-4'
                onSubmit={onSubmit}
            >

                {/* Company Name */}
                <input
                    type='text'
                    name='companyName'
                    placeholder='Company Name'
                    required
                    className='bg-gray-800 text-white px-4 py-3 rounded-lg outline-none'
                    value={formData.companyName}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            companyName: e.target.value
                        })
                    }
                />

                {/* Position */}
                <input
                    type='text'
                    name='position'
                    placeholder='Position'
                    required
                    className='bg-gray-800 text-white px-4 py-3 rounded-lg outline-none'
                    value={formData.position}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            position: e.target.value
                        })
                    }
                />

                {/* Status */}
                <select
                    name='status'
                    className='bg-gray-800 text-white px-4 py-3 rounded-lg outline-none'
                    value={formData.status}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            status: e.target.value
                        })
                    }
                >
                    <option value="Applied">Applied</option>
                    <option value="Under Review">Under Review</option>
                    <option value="Interview">Interview</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Accepted">Accepted</option>
                </select>

                {/* Cold Mail Status */}
                <select
                    name='coldMailStatus'
                    className='bg-gray-800 text-white px-4 py-3 rounded-lg outline-none'
                    value={formData.coldMailStatus}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            coldMailStatus: e.target.value
                        })
                    }
                >
                    <option value="Not Sent">Not Sent</option>
                    <option value="Sent">Sent</option>
                    <option value="Replied">Replied</option>
                </select>

                {/* Location */}
                <input
                    type='text'
                    name='location'
                    placeholder='Location'
                    className='bg-gray-800 text-white px-4 py-3 rounded-lg outline-none'
                    value={formData.location}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            location: e.target.value
                        })
                    }
                />

                {/* Applied Date */}
                <input
                    type='date'
                    name='appliedDate'
                    className='bg-gray-800 text-white px-4 py-3 rounded-lg outline-none'
                    value={formData.appliedDate}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            appliedDate: e.target.value
                        })
                    }
                />

                {/* Deadline Date */}
                <input
                    type='date'
                    name='deadlineDate'
                    required
                    className='bg-gray-800 text-white px-4 py-3 rounded-lg outline-none'
                    value={formData.deadlineDate}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            deadlineDate: e.target.value
                        })
                    }
                />

                {/* Job Link */}
                <input
                    type='text'
                    name='jobLink'
                    placeholder='Job Link (optional)'
                    className='bg-gray-800 text-white px-4 py-3 rounded-lg outline-none'
                    value={formData.jobLink}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            jobLink: e.target.value
                        })
                    }
                />

                {/* Notes */}
                <textarea
                    name='notes'
                    placeholder='Notes (optional)'
                    className='bg-gray-800 text-white px-4 py-3 rounded-lg outline-none'
                    value={formData.notes}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            notes: e.target.value
                        })
                    }
                />

                <button
                    type='submit'
                    className='bg-yellow-500 text-black px-4 py-3 rounded-lg font-bold'
                >
                    Edit Application
                </button>

            </form>
        </>
  )
}

export default EditCard