import React from 'react'
   import { Briefcase, Mail, User, LogOut } from "lucide-react";
const NavBarComp = () => {
  return (
   <>
    <header className="sticky top-0 z-40 w-full border-b bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">

        {/* Left: Brand */}
        <div className="text-lg font-semibold">
          TrackStack
        </div>

        {/* Right: Nav Items */}
        <nav className="flex items-center gap-4">

          <a
            href="/"
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-black"
          >
            <Briefcase className="h-4 w-4" />
            Applications
          </a>

          <a
            href="/cold-mail"
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-black"
          >
            <Mail className="h-4 w-4" />
            Cold Mails
          </a>

          <button
            className="flex items-center gap-2 text-sm text-red-500 hover:text-red-600"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>

        </nav>
      </div>
    </header>
   </>
  )
}

export default NavBarComp