import React from "react";
import { Bell, User, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import GoogleTranslate from "./GoogleTranslate";  // import the clean translator

const Navbar = ({ onHoverSidebar }) => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-green-700 to-green-500 shadow-md border-b text-white z-50 flex items-center px-6" style={{ height: "56px" }}>
      {/* Left section with sidebar toggle, logo, and small gov text */}
      <div className="flex items-center space-x-3 w-1/4 h-full">
        <button
          onMouseEnter={onHoverSidebar}
          className="p-2 rounded hover:bg-green-600 transition flex items-center justify-center"
          aria-label="Toggle sidebar"
          style={{ height: "36px", width: "36px" }}
        >
          <Menu className="w-6 h-6" />
        </button>

        <div
          className="flex flex-col items-center cursor-pointer justify-center"
          onClick={() => navigate("/")}
          style={{ lineHeight: 1 }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Jharkhand_Rajakiya_Chihna.svg/1200px-Jharkhand_Rajakiya_Chihna.svg.png"
            alt="Government of Jharkhand Logo"
            className="w-8 h-8 mb-0.5 object-contain"
            style={{ maxHeight: "32px" }}
          />
          <p className="text-xs font-light select-none leading-none">Government of Jharkhand</p>
        </div>
      </div>

      {/* Center section with main title */}
      <div className="flex justify-center flex-1 h-full items-center">
        <h1
          className="text-lg font-bold uppercase tracking-widest cursor-default select-none"
          aria-label="Nagar Sahayata Portal"
          style={{ lineHeight: 1 }}
        >
          Nagar Sahayata Portal
        </h1>
      </div>

      {/* Right section */}
      <div className="flex items-center space-x-5 w-1/4 justify-end relative h-full">
        <div className="relative flex items-center justify-center" style={{ height: "36px", width: "36px" }}>
          <Bell className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
            7
          </span>
        </div>

        <div className="relative flex items-center justify-center" style={{ height: "36px", width: "36px" }}>
          <User
            className="w-7 h-7 cursor-pointer hover:scale-110 transition-transform"
            onClick={() => navigate("/profile")}
          />
        </div>

        {/* Google Translate dropdown */}
        <GoogleTranslate />
      </div>
    </nav>
  );
};

export default Navbar;
