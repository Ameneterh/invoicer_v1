import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

export default function HeaderComponent() {
  const [user, setUser] = useState(false);
  return (
    <div className="w-full px-4 py-2 max-w-5xl mx-auto bg-[#145da0] shadow mb-5 sticky top-0 flex items-center justify-between z-50">
      <Link to="/">
        <div className="text-white font-bold text-4xl flex items-center gap-1">
          <img src="./at-personal-logo.png" alt="" className="w-8" />
          INVOICER
        </div>
      </Link>
      {user ? (
        <div className="bg-white px-3 py-1 rounded flex items-center gap-2">
          <FaUserCircle className="text-2xl" />{" "}
          <p className="font-bold text-sm text-blue-950">Username</p>
        </div>
      ) : (
        <div className="flex items-center gap-3 text-md">
          <Link
            to="/login"
            className="bg-[#2066a8] px-3 py-1 rounded text-white hover:text-blue-800 hover:bg-white"
          >
            Login
          </Link>{" "}
          <Link
            to="/register"
            className="bg-[#2066a8] px-3 py-1 rounded text-white hover:text-blue-800 hover:bg-white"
          >
            Register
          </Link>
        </div>
      )}
    </div>
  );
}
