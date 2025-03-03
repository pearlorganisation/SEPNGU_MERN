import React, { useState } from "react";

const NotificationDropdown = ({ notifications }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="relative p-2 rounded-full bg-gray-200"
        onClick={() => setOpen(!open)}
      >
        🔔
        {notifications.length > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 rounded-full">
            {notifications.length}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4">
          <h3 className="font-semibold">Notifications</h3>
          <ul>
            {notifications.length > 0 ? (
              notifications.map((notif, index) => (
                <li key={index} className="p-2 border-b text-sm">
                  {notif.message}
                </li>
              ))
            ) : (
              <li className="p-2 text-gray-500 text-sm">
                No new notifications
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;
