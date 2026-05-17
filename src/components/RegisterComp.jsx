import React from 'react'

import { useState } from 'react'
import { register } from '../services/AuthService'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const RegisterComp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })
const navigate = useNavigate();
 const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const res = await register(formData.username, formData.email, formData.password);
      toast.success('Registration successful!)');

      if(res.token){
        localStorage.setItem('token', res.token);
          
        navigate('/home')
      }
    }
    catch(err){
      console.error(err);
      toast.error('Registration failed. Please try again.');
    }
    
  }

  return (
    <form onSubmit={onSubmitForm} className='flex flex-col gap-4'>
      <input
        type='text'
        name='username'
        placeholder='Username'
        onChange={(e)=> setFormData({...formData, username: e.target.value})}
        className='bg-gray-800 text-white px-4 py-3 rounded-lg outline-none'
      />
      <input
        type='email'
        name='email'
        placeholder='Email'
        onChange={(e)=> setFormData({...formData, email: e.target.value})}
        className='bg-gray-800 text-white px-4 py-3 rounded-lg outline-none'
      />
      <input
        type='password'
        name='password'
        placeholder='Password'
        onChange={(e)=> setFormData({...formData, password: e.target.value})}
        className='bg-gray-800 text-white px-4 py-3 rounded-lg outline-none'
      />
      <button
        type='submit'
        className='bg-yellow-500 text-black font-semibold py-3 rounded-lg mt-2'
      >
        Register
      </button>
    </form>
  )
}

export default RegisterComp