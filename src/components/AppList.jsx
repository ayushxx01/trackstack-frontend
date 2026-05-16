// AppList.jsx

import React from "react";
import AppCard from "./AppCard";

const AppList = ({ applications, deleteHandler, onEdit }) => {
  if (!applications || applications.length === 0)
    return (
      <div className="mt-10 rounded-xl border bg-white p-10 text-center text-gray-500 shadow-sm">
        No Applications Yet
      </div>
    );

  return (
    <div className="flex flex-col gap-4">
      {applications.map((app) => (
        <AppCard
          key={app._id}
          app={app}
          deleteHandler={deleteHandler}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default AppList;