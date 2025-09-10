import React from "react";
import { FileText, CheckCircle, Clock, Building } from "lucide-react";
import { useTranslation } from "react-i18next";
import MapSection from "../components/MapSection";
import ReportsList from "../components/ReportsList";
import ReportsTable from "../components/ReportsTable";
import ActivityLog from "../components/ActivityLog";
import AddReportForm from "../components/AddReportForm";
import AnalyticsCharts from "../components/AnalyticsCharts";
import Footer from "../components/Footer";

const stats = [
  {
    key: "totalIssues",
    title: "Total Issues",
    value: "1,245",
    icon: FileText,
    color: "bg-blue-100 text-blue-600",
  },
  {
    key: "resolved",
    title: "Resolved",
    value: "980",
    icon: CheckCircle,
    color: "bg-green-100 text-green-600",
  },
  {
    key: "pending",
    title: "Pending",
    value: "265",
    icon: Clock,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    key: "departments",
    title: "Departments",
    value: "12",
    icon: Building,
    color: "bg-purple-100 text-purple-600",
  },
];

const DashboardCards = () => {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-2xl p-5 flex items-center justify-between hover:shadow-lg transition"
        >
          <div>
            {/* Use translation keys */}
            <p className="text-gray-600">{t(`dashboardCards.${stat.key}`, stat.title)}</p>
            <h2 className="text-2xl font-bold">{stat.value}</h2>
          </div>
          <div className={`p-3 rounded-full ${stat.color}`}>
            <stat.icon className="w-6 h-6" />
          </div>
        </div>
      ))}
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="flex flex-col space-y-8">
      <DashboardCards />

      <div className="bg-white rounded-lg shadow p-4">
        <MapSection />
        <AnalyticsCharts />
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <ReportsTable />
        <ActivityLog />
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <AddReportForm />
        <ReportsList />
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
