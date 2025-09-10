// src/pages/Profile.jsx
import React from "react";

const Profile = () => {
  const user = {
    name: "Abhay Kumar Yadav",
    email: "abhayyadav@example.com",
    phone: "+91 9631289175",
    empId: "JHKD/STAFF/2023/0012",
    role: "Staff Member",
    department: "IT Department",
    address: "123, Sector 5, Ranchi, Jharkhand, India",
    joiningDate: "2023-01-15",
    profileImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Chris_Hemsworth_by_Gage_Skidmore_2.jpg/440px-Chris_Hemsworth_by_Gage_Skidmore_2.jpg",
  };

  return (
    <div className="min-h-screen bg-[#f4f4f4] py-10 px-4 font-sans">
      <div className="max-w-5xl mx-auto bg-white border border-gray-300 rounded-md shadow-md">
        {/* Header Section */}
        <div className="bg-[#006400] text-white text-center py-4 rounded-t-md border-b border-green-800">
          <h1 className="text-2xl font-semibold uppercase tracking-wide">
            Profile
          </h1>
          <p className="text-sm font-light">Government of Jharkhand</p>
        </div>

        {/* Profile Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-8">
          {/* Left: Profile Picture */}
          <div className="flex flex-col items-center">
            <img
              src={user.profileImage}
              alt="Profile"
              className="w-36 h-36 rounded-full border-4 border-green-800 object-cover mb-4"
            />
            <p className="text-lg font-semibold">{user.name}</p>
            <p className="text-sm text-gray-700">{user.role}</p>
          </div>

          {/* Right: Details */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ProfileItem label="Employee ID" value={user.empId} />
            <ProfileItem label="Department" value={user.department} />
            <ProfileItem label="Email" value={user.email} />
            <ProfileItem label="Phone" value={user.phone} />
            <ProfileItem label="Address" value={user.address} />
            <ProfileItem
              label="Joining Date"
              value={new Date(user.joiningDate).toLocaleDateString("en-IN")}
            />
          </div>
        </div>

        {/* Footer Section */}
        <div className="border-t border-gray-300 p-4 text-center">
          <button
            className="bg-[#006400] hover:bg-green-900 text-white px-6 py-2 rounded text-sm tracking-wide"
            onClick={() => alert("Logged out")}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

// Reusable field component
const ProfileItem = ({ label, value }) => (
  <div>
    <p className="text-xs font-medium text-gray-500 uppercase">{label}</p>
    <p className="text-sm font-semibold text-gray-800 mt-1">{value}</p>
  </div>
);

export default Profile;
