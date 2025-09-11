import React from "react";
import {
  LayoutDashboard,
  FileText,
  ListChecks,
  Building,
  BarChart3,
  Settings,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ isOpen, closeSidebar }) => {
  const navigate = useNavigate();

  // Map each menu item to a path
  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/" },
    { name: "Reports", icon: FileText, path: "/reports" },       // <=== this will navigate to ReportsList.jsx route
    { name: "Categories", icon: ListChecks, path: "/categories" },
    { name: "Departments", icon: Building, path: "/departments" },
    { name: "Analytics", icon: BarChart3, path: "/analytics" },
    { name: "Settings", icon: Settings, path: "/settings" },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    closeSidebar();  // optionally close sidebar after navigation
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-white dark:bg-gray-800 shadow-lg w-64 transform transition-transform duration-300 z-40 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      onMouseLeave={closeSidebar}
    >
      <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-lg font-bold text-green-700 dark:text-green-400">Staff Panel</h1>
        <button
          onClick={closeSidebar}
          className="text-green-700 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900 rounded p-1"
          aria-label="Close sidebar"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <nav className="flex-1 mt-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="group flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-green-900 cursor-pointer transition"
              onClick={() => handleNavigation(item.path)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleNavigation(item.path);
                }
              }}
            >
              <item.icon className="w-5 h-5 text-green-700 dark:text-green-400" />
              <span className="ml-3">{item.name}</span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
