import React, { useState, useEffect } from "react";

const Settings = () => {
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [inAppNotifications, setInAppNotifications] = useState(true);
  const [language, setLanguage] = useState("English");
  const [darkTheme, setDarkTheme] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;

    if (darkTheme) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkTheme]);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white shadow-md rounded-2xl p-6 space-y-8 transition-colors duration-300">
      <h1 className="text-2xl font-bold">Settings</h1>

      {/* Account Settings */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Account Settings</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <input className="p-2 border rounded bg-white dark:bg-gray-800" placeholder="Change Password" type="password" />
          <input className="p-2 border rounded bg-white dark:bg-gray-800" placeholder="Update Email" type="email" />
          <input className="p-2 border rounded bg-white dark:bg-gray-800" placeholder="Update Contact Number" type="tel" />
        </div>
      </section>

      {/* Profile Info */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Profile Info</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <input className="p-2 border rounded bg-white dark:bg-gray-800" placeholder="Full Name" />
          <input className="p-2 border rounded bg-white dark:bg-gray-800" placeholder="Department" />
          <input className="p-2 border rounded bg-white dark:bg-gray-800" placeholder="Role" />
          <input className="p-2 border rounded bg-white dark:bg-gray-800" type="file" accept="image/*" />
        </div>
      </section>

      {/* Staff Management */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Staff Management</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <input className="p-2 border rounded w-full md:w-1/2 bg-white dark:bg-gray-800" placeholder="Add Staff User (Email)" />
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Add</button>
        </div>
        <div className="mt-3">
          <input className="p-2 border rounded w-full md:w-1/2 bg-white dark:bg-gray-800" placeholder="Remove Staff User (Email)" />
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 mt-2 md:mt-0 ml-0 md:ml-2">Remove</button>
        </div>
      </section>

      {/* Notification Preferences */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Notification Preferences</h2>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={emailAlerts} onChange={() => setEmailAlerts(!emailAlerts)} />
            Email Alerts
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={inAppNotifications} onChange={() => setInAppNotifications(!inAppNotifications)} />
            In-App Notifications
          </label>
        </div>
      </section>

      {/* Language & Theme */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Language & Theme Preferences</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <select className="p-2 border rounded bg-white dark:bg-gray-800" value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option>English</option>
            <option>Hindi</option>
          </select>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={darkTheme} onChange={() => setDarkTheme(!darkTheme)} />
            Dark Theme
          </label>
        </div>
      </section>

      {/* Export Data */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Export Data</h2>
        <div className="flex gap-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Export Reports (CSV)</button>
          <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">Export Activity Logs (PDF)</button>
        </div>
      </section>
    </div>
  );
};

export default Settings;
