import React from 'react'
import { useState } from 'react';
import { createApp } from '../services/AppService';
import { toast } from 'react-toastify';
const CreateApp = ({ applications, onAdd }) => {
  const [companyName, setCompanyName] = useState('');
  const [position, setPosition] = useState('');
  const [status, setStatus] = useState('');
  const [location, setLocation] = useState('');
  const [appliedDate, setAppliedDate] = useState('');
  const [notes, setNotes] = useState('');
  const [deadlineDate, setDeadlineDate] = useState('');
  const [coldMailStatus, setColdMailStatus] = useState('');
  const [jobLink, setJobLink] = useState('');
  const resetForm = () => {
    setCompanyName('');
    setPosition('');
    setStatus('');
    setLocation('');
    setAppliedDate('');
    setNotes('');
    setDeadlineDate('');
    setColdMailStatus('');
    setJobLink('');
  };

  const submitForm = async (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to the backend
    const formData = {
      companyName,
      position,
      status,
      location,
      appliedDate,
      notes,
      deadlineDate,
      coldMailStatus,
      jobLink
    };
    console.log(formData);
    const result = await createApp(formData);
    if(result){
      toast.success('Application created successfully!');
      resetForm();
      onAdd();
    }
  }
  
  return (
    <>
    <section className='bg-indigo-400'>
      <div className="container m-auto max-w-2xl py-20">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m04 md:m-0">
          <form onSubmit={submitForm}>
            <h1 className='text-2xl font-bold text-gray-800'>Create Application</h1>
            
            <div className="mb-4">
              <label htmlFor="companyName">Company Name <span className='text-red-500'>*</span></label>
              <input
                type="text"
                id="companyName"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="position">Position <span className='text-red-500'>*</span></label>
              <input
                type="text"
                id="position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="status">Status <span className='text-red-500'>*</span></label>
<select
  id="status"
  value={status}
  onChange={(e) => setStatus(e.target.value)}
  className="border border-gray-300 rounded-md py-2 px-4"
>
  <option value="">Select Status</option>
  <option value="Applied">Applied</option>
  <option value="Under Review">Under Review</option>
  <option value="Interview">Interview</option>
  <option value="Rejected">Rejected</option>
  <option value="Accepted">Accepted</option>
</select>
            </div>
            <div className="mb-4">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="appliedDate">Applied Date <span className='text-red-500'>*</span></label>
              <input
                type="date"
                id="appliedDate"
                value={appliedDate}
                onChange={(e) => setAppliedDate(e.target.value)}
                className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="notes">Notes</label>
              <textarea
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="deadlineDate">Deadline Date <span className='text-red-500'>*</span></label>
              <input
                type="date"
                id="deadlineDate"
                value={deadlineDate}
                onChange={(e) => setDeadlineDate(e.target.value)}
                className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="coldMailStatus">Cold Mail Status <span className='text-red-500'>*</span></label>
<select
  id="coldMailStatus"
  value={coldMailStatus}
  onChange={(e) => setColdMailStatus(e.target.value)}
  className="border border-gray-300 rounded-md py-2 px-4"
>
  <option value="">Select Status</option>
  <option value="Not Sent">Not Sent</option>
  <option value="Sent">Sent</option>
  <option value="Replied">Replied</option>
</select>
            </div>
            <div className="mb-4">
              <label htmlFor="jobLink">Job Link</label>
              <input
                type="url"
                id="jobLink"
                value={jobLink}
                onChange={(e) => setJobLink(e.target.value)}
                className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Add more input fields for other application details */}
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              Create Application
            </button>
          </form>
        </div>
      </div>
    </section>
    </>
  )

}
export default CreateApp