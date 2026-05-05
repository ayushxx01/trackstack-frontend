import React, { useState } from 'react'
import LoginComp from '../components/LoginComp';
import RegisterComp from '../components/RegisterComp';

const AuthPage = () => {
  const [isLogin, setisLogin] = useState(true);
  const setIsLogin = (value) => {
    setisLogin(value);
  }
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-950'>
      <div className='w-full max-w-md bg-gray-900 rounded-xl p-8'>
        
        {/* Tab switcher */}
        <div className='flex mb-8'>
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 text-sm font-medium border-b-2 transition-all
              ${isLogin 
                ? 'border-yellow-500 text-yellow-500' 
                : 'border-transparent text-gray-400'}`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 text-sm font-medium border-b-2 transition-all
              ${!isLogin 
                ? 'border-yellow-500 text-yellow-500' 
                : 'border-transparent text-gray-400'}`}
          >
            Register
          </button>
        </div>

        {/* Conditional render */}
        {isLogin ? <LoginComp /> : <RegisterComp />}

      </div>
    </div>
  )
}

export default AuthPage