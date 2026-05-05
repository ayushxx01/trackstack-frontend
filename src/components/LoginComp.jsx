import React from 'react'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { login } from '../services/AuthService';

const LoginComp = ({}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onSubmitForm = async (e) => {
    e.preventDefault();

    const res = await login(email,password);

    if(!res.token){
      alert(res.message);
    }
    else{
      localStorage.setItem('token',res.token);
      navigate('/home');
    }
  }
  return (
    <form onSubmit= {onSubmitForm} className='flex flex-col gap-4'>
      <input
        type='email'
        name='email'
        placeholder='Email'
        onChange={(e)=> setEmail(e.target.value)}
        className='bg-gray-800 text-white px-4 py-3 rounded-lg outline-none'
        required
      />
      <input
        type='password'
        name='password'
        placeholder='Password'
        onChange={(e)=> setPassword(e.target.value)}
        className='bg-gray-800 text-white px-4 py-3 rounded-lg outline-none'
        required
      />
      <button
        type='submit'
        className='bg-yellow-500 text-black font-semibold py-3 rounded-lg mt-2'
      >
        Login
      </button>
    </form>
  )
}

export default LoginComp