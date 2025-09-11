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
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Reports</h2>
      <div className="space-y-4 max-h-[600px] overflow-y-auto">
        {dummyReports.map((report) => (
          <div key={report.id} className="border border-gray-300 dark:border-gray-700 p-4 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">{report.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">Location: {report.location}</p>
            <p className="text-gray-700 dark:text-gray-300">Date: {report.date}</p>
            <p>Status: <span className={`font-bold ${
              report.status === "Resolved"
                ? "text-green-600 dark:text-green-400"
                : report.status === "Pending"
                ? "text-red-600 dark:text-red-400"
                : "text-yellow-600 dark:text-yellow-400"
            }`}>{report.status}</span></p>
            <p className="text-gray-700 dark:text-gray-300">Priority: {report.priority}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportsList;
