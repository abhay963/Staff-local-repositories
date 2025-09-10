import React from "react";

const dummyNotifications = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  message: `Notification #${index + 1}: An issue has been reported.`,
  time: `${index + 1} minutes ago`,
}));

const NotificationsPanel = () => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-4">Notifications</h2>
      <div className="space-y-3 max-h-[300px] overflow-y-auto">
        {dummyNotifications.map((note) => (
          <div key={note.id} className="p-3 border rounded hover:bg-gray-100 transition">
            <p>{note.message}</p>
            <p className="text-sm text-gray-500">{note.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsPanel;
