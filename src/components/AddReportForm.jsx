import React, { useState, useEffect } from "react";

const AddReportForm = ({ juniorStaffList = [] }) => {
  const [formData, setFormData] = useState({
    issue: "",
    location: "",
    category: "Road",
    description: "",
    assignedTo: "",  // new field for assignment
    status: "Pending",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.assignedTo) {
      alert("Please assign this task to a staff member.");
      return;
    }
    console.log("Assigned Task:", formData);
    alert("Task assigned successfully!");
    setFormData({
      issue: "",
      location: "",
      category: "Road",
      description: "",
      assignedTo: "",
      status: "Pending",
      image: null,
    });
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 mt-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-6 text-center">Assign Task to Staff</h2>
      <form className="space-y-5" onSubmit={handleSubmit}>

        {/* Issue Title */}
        <div>
          <label className="block mb-1 font-semibold">Issue Title</label>
          <input
            type="text"
            name="issue"
            value={formData.issue}
            onChange={handleChange}
            placeholder="Enter issue title"
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>

        {/* Location */}
        <div>
          <label className="block mb-1 font-semibold">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter location"
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block mb-1 font-semibold">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          >
            <option>Road</option>
            <option>Electricity</option>
            <option>Sanitation</option>
            <option>Water</option>
            <option>Other</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-semibold">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter detailed description"
            className="w-full p-2 border rounded-lg"
            rows="3"
          />
        </div>

        {/* Assign To */}
        <div>
          <label className="block mb-1 font-semibold">Assign To</label>
          <select
            name="assignedTo"
            value={formData.assignedTo}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          >
            <option value="" disabled>
              -- Select Staff Member --
            </option>
            {juniorStaffList.map((staff) => (
              <option key={staff.id} value={staff.id}>
                {staff.name} ({staff.role})
              </option>
            ))}
          </select>
        </div>

        {/* Upload Image */}
        <div>
          <label className="block mb-1 font-semibold">Upload Image (Optional)</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition w-full"
        >
          Assign Task
        </button>
      </form>
    </div>
  );
};

export default AddReportForm;
