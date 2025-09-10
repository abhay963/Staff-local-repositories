import React, { useState } from "react";

const ReportsTable = () => {
  
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [selectedReport, setSelectedReport] = useState(null);

  const reports = [
    { id: 1, issue: "Pothole", location: "Ranchi", status: "Pending", category: "Road", description: "Large pothole blocking half the road.", reporter: "Amit Kumar", date: "2025-09-08", image: "https://via.placeholder.com/150" },
    { id: 2, issue: "Streetlight not working", location: "Jamshedpur", status: "Resolved", category: "Electricity", description: "Streetlight near park has been broken for weeks.", reporter: "Priya Singh", date: "2025-09-06", image: "https://via.placeholder.com/150" },
    { id: 3, issue: "Garbage Overflow", location: "Dhanbad", status: "In Progress", category: "Sanitation", description: "Garbage is overflowing and causing smell.", reporter: "Rahul Verma", date: "2025-09-07", image: "https://via.placeholder.com/150" },
    { id: 4, issue: "Water Leakage", location: "Bokaro", status: "Pending", category: "Water", description: "Pipeline leakage near main road.", reporter: "Suman Das", date: "2025-09-05", image: "https://via.placeholder.com/150" },
    { id: 5, issue: "Broken Traffic Signal", location: "Ranchi", status: "In Progress", category: "Electricity", description: "Traffic signal not functioning at crossroad.", reporter: "Neha Kumari", date: "2025-09-04", image: "https://via.placeholder.com/150" },
    { id: 6, issue: "Blocked Drain", location: "Hazaribagh", status: "Resolved", category: "Sanitation", description: "Drain blocked, causing water stagnation.", reporter: "Manoj Tiwari", date: "2025-09-03", image: "https://via.placeholder.com/150" },
    { id: 7, issue: "Unclean Park", location: "Jamshedpur", status: "Pending", category: "Sanitation", description: "Park not cleaned for days.", reporter: "Kavita Sharma", date: "2025-09-02", image: "https://via.placeholder.com/150" },
    { id: 8, issue: "Water Contamination", location: "Dhanbad", status: "In Progress", category: "Water", description: "Contaminated water supply reported.", reporter: "Rakesh Yadav", date: "2025-09-01", image: "https://via.placeholder.com/150" },
    { id: 9, issue: "Cracked Sidewalk", location: "Ranchi", status: "Resolved", category: "Road", description: "Sidewalk cracked and unsafe.", reporter: "Neeraj Singh", date: "2025-08-30", image: "https://via.placeholder.com/150" },
    { id: 10, issue: "Noise Pollution", location: "Bokaro", status: "Pending", category: "Environment", description: "Excessive noise near residential area.", reporter: "Pooja Kumari", date: "2025-08-29", image: "https://via.placeholder.com/150" },
    { id: 11, issue: "Flooded Street", location: "Ranchi", status: "In Progress", category: "Water", description: "Street flooded after heavy rain.", reporter: "Sunil Oraon", date: "2025-08-28", image: "https://via.placeholder.com/150" },
    { id: 12, issue: "Broken Park Bench", location: "Jamshedpur", status: "Resolved", category: "Public Infrastructure", description: "Bench damaged, unsafe to sit.", reporter: "Anita Sharma", date: "2025-08-27", image: "https://via.placeholder.com/150" },
    { id: 13, issue: "Illegal Dumping", location: "Dhanbad", status: "Pending", category: "Sanitation", description: "Garbage dumped illegally on roadside.", reporter: "Vikash Patel", date: "2025-08-26", image: "https://via.placeholder.com/150" },
    { id: 14, issue: "Water Pump Failure", location: "Bokaro", status: "In Progress", category: "Water", description: "Pump malfunctioning affecting supply.", reporter: "Meena Kumari", date: "2025-08-25", image: "https://via.placeholder.com/150" },
    { id: 15, issue: "Broken Fence", location: "Ranchi", status: "Resolved", category: "Public Infrastructure", description: "Fence around school is broken.", reporter: "Sanjay Gupta", date: "2025-08-24", image: "https://via.placeholder.com/150" },
    { id: 16, issue: "Tree Blocking Road", location: "Jamshedpur", status: "Pending", category: "Environment", description: "Fallen tree obstructing traffic.", reporter: "Rekha Devi", date: "2025-08-23", image: "https://via.placeholder.com/150" },
    { id: 17, issue: "Corroded Electrical Box", location: "Dhanbad", status: "In Progress", category: "Electricity", description: "Corroded box near park causing hazards.", reporter: "Ashok Kumar", date: "2025-08-22", image: "https://via.placeholder.com/150" },
    { id: 18, issue: "Water Tank Overflow", location: "Bokaro", status: "Resolved", category: "Water", description: "Overflowing tank near housing colony.", reporter: "Sita Devi", date: "2025-08-21", image: "https://via.placeholder.com/150" },
    { id: 19, issue: "Open Manhole", location: "Ranchi", status: "Pending", category: "Road", description: "Manhole open, causing safety issues.", reporter: "Rajesh Kumar", date: "2025-08-20", image: "https://via.placeholder.com/150" },
    { id: 20, issue: "Broken Handrail", location: "Jamshedpur", status: "In Progress", category: "Public Infrastructure", description: "Handrail on staircase broken.", reporter: "Kiran Kumari", date: "2025-08-19", image: "https://via.placeholder.com/150" }
  ];

  const filteredReports = reports.filter((report) => {
    const matchesSearch =
      report.issue.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === "All" || report.status === statusFilter;
    const matchesCategory = categoryFilter === "All" || report.category === categoryFilter;

    return matchesSearch && matchesStatus && matchesCategory;
  });

  return (
    <div className="bg-white shadow-md rounded-2xl p-5">
      <h2 className="text-xl font-bold mb-4">Reported Issues</h2>

      {/* Filters Section */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4 space-y-3 lg:space-y-0 mb-4">
        <input
          type="text"
          placeholder="Search by issue or location"
          className="p-2 border rounded-lg w-full lg:w-1/3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="p-2 border rounded-lg"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option>All</option>
          <option>Pending</option>
          <option>In Progress</option>
          <option>Resolved</option>
        </select>
        <select
          className="p-2 border rounded-lg"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option>All</option>
          <option>Road</option>
          <option>Electricity</option>
          <option>Sanitation</option>
          <option>Water</option>
          <option>Environment</option>
          <option>Public Infrastructure</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-lg">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="px-4 py-2 border">#</th>
              <th className="px-4 py-2 border">Issue</th>
              <th className="px-4 py-2 border">Location</th>
              <th className="px-4 py-2 border">Category</th>
              <th className="px-4 py-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredReports.length > 0 ? (
              filteredReports.map((report) => (
                <tr
                  key={report.id}
                  className="text-center hover:bg-green-50 cursor-pointer"
                  onClick={() => setSelectedReport(report)}
                >
                  <td className="border px-4 py-2">{report.id}</td>
                  <td className="border px-4 py-2">{report.issue}</td>
                  <td className="border px-4 py-2">{report.location}</td>
                  <td className="border px-4 py-2">{report.category}</td>
                  <td
                    className={`border px-4 py-2 font-semibold ${
                      report.status === "Resolved"
                        ? "text-green-600"
                        : report.status === "Pending"
                        ? "text-red-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {report.status}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center p-4">
                  No reports found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {selectedReport && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96 relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
              onClick={() => setSelectedReport(null)}
            >
              ✖
            </button>
            <h3 className="text-lg font-bold mb-3">{selectedReport.issue}</h3>
            <img
              src={selectedReport.image}
              alt={selectedReport.issue}
              className="w-full h-40 object-cover rounded mb-3"
            />
            <p><strong>Location:</strong> {selectedReport.location}</p>
            <p><strong>Status:</strong> {selectedReport.status}</p>
            <p><strong>Category:</strong> {selectedReport.category}</p>
            <p><strong>Description:</strong> {selectedReport.description}</p>
            <p><strong>Reporter:</strong> {selectedReport.reporter}</p>
            <p><strong>Date:</strong> {selectedReport.date}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportsTable;
