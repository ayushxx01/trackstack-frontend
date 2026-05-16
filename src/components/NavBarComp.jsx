import React from "react";
import { Briefcase, Mail, Search, User, LogOut } from "lucide-react";
import { useNavigate, NavLink } from "react-router-dom";
import { logOut } from "../services/AuthService";

const NavBarComp = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <a
          href="/home"
          className="flex items-center gap-2 text-2xl font-bold text-indigo-700"
        >
          <Briefcase className="h-5 w-5" />
          <span>TrackStack</span>
        </a>

        {/* Nav Links */}
        <nav className="flex items-center gap-8 text-sm font-medium">

          <NavLink
            to="/home"
            className={({ isActive }) =>
              `relative transition ${
                isActive
                  ? "text-indigo-700"
                  : "text-gray-600 hover:text-black"
              }`
            }
          >
            {({ isActive }) => (
              <>
                Applications
                {isActive && (
                  <span className="absolute -bottom-[21px] left-0 h-[2px] w-full bg-indigo-700" />
                )}
              </>
            )}
          </NavLink>


        

         
          {/* Divider */}
          <div className="h-6 w-px bg-gray-300" />

          {/* Logout */}
          <button
            onClick={async () => {
              await logOut();
              navigate("/");
            }}
            className="font-semibold text-gray-700 transition hover:text-red-500"
          >
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
};

export default NavBarComp;