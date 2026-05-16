import React, { useState } from "react";
import {
  BriefcaseBusiness,
} from "lucide-react";

import LoginComp from "../components/LoginComp";
import RegisterComp from "../components/RegisterComp";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex min-h-screen flex-col bg-[#f7f5fb]">

      {/* Main Content */}
      <div className="flex flex-1 items-center justify-center px-4 py-10">

        <div className="w-full max-w-xl">

          {/* Logo */}
          <div className="mb-10 flex flex-col items-center">

            <div className="flex items-center gap-3 text-indigo-700 mr-7">
      

              <h1 className="text-5xl font-bold">
                TrackStack
              </h1>
            </div>

            <h2 className="mt-10 text-center text-5xl font-bold text-gray-900">
              Welcome back
            </h2>

            <p className="mt-4 text-center text-xl text-gray-500">
              Stay on track with your career journey.
            </p>
          </div>

          {/* Auth Card */}
          <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-200">

            {/* Tabs */}
            <div className="mb-10 flex border-b border-gray-200">

              <button
                onClick={() => setIsLogin(true)}
                className={`relative pb-4 text-lg font-semibold transition ${
                  isLogin
                    ? "text-indigo-700"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                Sign In

                {isLogin && (
                  <span className="absolute bottom-0 left-0 h-[3px] w-full rounded-full bg-indigo-700" />
                )}
              </button>

              <button
                onClick={() => setIsLogin(false)}
                className={`relative ml-8 pb-4 text-lg font-semibold transition ${
                  !isLogin
                    ? "text-indigo-700"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                Register

                {!isLogin && (
                  <span className="absolute bottom-0 left-0 h-[3px] w-full rounded-full bg-indigo-700" />
                )}
              </button>
            </div>

            {/* Forms */}
            {isLogin ? <LoginComp /> : <RegisterComp />}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8">

        <div className="flex items-center justify-center gap-8 text-sm font-medium text-gray-600">
          <button className="hover:text-black">
            Terms of Service
          </button>

          <button className="hover:text-black">
            Privacy Policy
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
          © 2024 TrackStack Productivity Inc.
        </p>
      </footer>
    </div>
  );
};

export default AuthPage;