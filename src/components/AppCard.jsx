// AppCard.jsx

import React, { useState } from "react";
import {
  Building2,
  MapPin,
  CalendarDays,
  Pencil,
  Trash2,
} from "lucide-react";

import EditFields from "./EditFields";

const statusStyles = {
  Applied: "bg-gray-100 text-gray-700",
  Interview: "bg-blue-100 text-blue-700",
  Offer: "bg-orange-100 text-orange-700",
  Rejected: "bg-red-100 text-red-700",
};

const AppCard = ({ app, deleteHandler, onEdit }) => {
  const [edit, setEdit] = useState(false);

  const [formData, setFormData] = useState({
    companyName: app.companyName,
    position: app.position,
    status: app.status,
    location: app.location,
    appliedDate: app.appliedDate,
    deadlineDate: app.deadlineDate,
    jobLink: app.jobLink,
    notes: app.notes,
  });

  if (edit) {
    return (
      <EditFields
        app={app}
        formData={formData}
        setFormData={setFormData}
        onEdit={onEdit}
        onCancel={() => setEdit(false)}
      />
    );
  }

  return (
    <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">

      {/* Left Section */}
      <div className="flex items-center gap-4">

        {/* Logo */}
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100">
          <Building2 className="h-7 w-7 text-indigo-600" />
        </div>

        {/* Info */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            {app.companyName}
          </h2>

          <p className="mt-1 text-sm text-gray-600">
            {app.position}
            {app.location && (
              <>
                {" "}
                • <MapPin className="mb-1 inline h-3 w-3" /> {app.location}
              </>
            )}
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-8">

        {/* Date */}
        <div className="hidden text-right md:block">
          <p className="text-xs text-gray-500">Application Date</p>

          <div className="mt-1 flex items-center justify-end gap-1 text-sm font-medium text-gray-700">
            <CalendarDays className="h-4 w-4" />
            {new Date(app.appliedDate).toLocaleDateString()}
          </div>
        </div>

        {/* Status */}
        <div
          className={`rounded-full px-4 py-2 text-xs font-semibold ${
            statusStyles[app.status] || "bg-gray-100 text-gray-700"
          }`}
        >
          {app.status}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setEdit(true)}
            className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-indigo-600"
          >
            <Pencil className="h-4 w-4" />
          </button>

          <button
            onClick={() => deleteHandler(app._id)}
            className="rounded-lg p-2 text-gray-500 transition hover:bg-red-50 hover:text-red-600"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppCard;