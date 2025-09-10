import React, { useState, useEffect, useRef } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const issueTrendData = [
  { month: "Jan", reports: 120 },
  { month: "Feb", reports: 98 },
  { month: "Mar", reports: 150 },
  { month: "Apr", reports: 200 },
  { month: "May", reports: 170 },
  { month: "Jun", reports: 220 },
];

const issueStatusData = [
  { name: "Resolved", value: 980 },
  { name: "Pending", value: 265 },
  { name: "In Progress", value: 120 },
];

const COLORS = ["#16a34a", "#dc2626", "#facc15"]; // Green, Red, Yellow

const AnalyticsCharts = () => {
  const [barVisible, setBarVisible] = useState(false);
  const [pieVisible, setPieVisible] = useState(false);

  const barRef = useRef(null);
  const pieRef = useRef(null);

  useEffect(() => {
    const observerOptions = { threshold: 0.3 };

    const barObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setBarVisible(true);
        barObserver.disconnect();
      }
    }, observerOptions);

    const pieObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setPieVisible(true);
        pieObserver.disconnect();
      }
    }, observerOptions);

    if (barRef.current) barObserver.observe(barRef.current);
    if (pieRef.current) pieObserver.observe(pieRef.current);

    return () => {
      barObserver.disconnect();
      pieObserver.disconnect();
    };
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Bar Chart */}
      <div
        ref={barRef}
        className="bg-white shadow-md rounded-2xl p-5 min-h-[350px]"
      >
        <h2 className="text-xl font-bold mb-4">Reports Over Time</h2>
        {barVisible ? (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={issueTrendData}
              // animate bars only if barVisible is true
            >
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="reports"
                fill="#16a34a"
                radius={[6, 6, 0, 0]}
                isAnimationActive={true}
                animationDuration={1500}
              />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <div className="h-[300px] flex items-center justify-center text-gray-400">
            Scroll to load chart...
          </div>
        )}
      </div>

      {/* Pie Chart */}
      <div
        ref={pieRef}
        className="bg-white shadow-md rounded-2xl p-5 min-h-[350px]"
      >
        <h2 className="text-xl font-bold mb-4">Issue Status Distribution</h2>
        {pieVisible ? (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={issueStatusData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
                isAnimationActive={true}
                animationDuration={1500}
              >
                {issueStatusData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <div className="h-[300px] flex items-center justify-center text-gray-400">
            Scroll to load chart...
          </div>
        )}
      </div>
    </div>
  );
};

export default AnalyticsCharts;
