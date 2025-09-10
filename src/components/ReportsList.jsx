import React from "react";

const dummyReports = Array.from({ length: 25 }, (_, index) => ({
  id: index + 1,
  title: `Report #${index + 1}`,
  location: "Ranchi, Jharkhand",
  date: "2025-09-09",
  status: index % 3 === 0 ? "Resolved" : index % 3 === 1 ? "Pending" : "In Progress",
  priority: index % 2 === 0 ? "High" : "Normal",
}));

const ReportsList = () => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-4">Reports</h2>
      <div className="space-y-4 max-h-[600px] overflow-y-auto">
        {dummyReports.map((report) => (
          <div key={report.id} className="border p-4 rounded hover:bg-gray-100 transition">
            <h3 className="font-semibold">{report.title}</h3>
            <p>Location: {report.location}</p>
            <p>Date: {report.date}</p>
            <p>Status: <span className={`font-bold ${report.status === "Resolved" ? "text-green-600" : report.status === "Pending" ? "text-red-600" : "text-yellow-600"}`}>{report.status}</span></p>
            <p>Priority: {report.priority}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportsList;
