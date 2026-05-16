import React, { useState } from "react";
import {
  Building2,
  CalendarDays,
  Link2,
  Plus,
  X,
} from "lucide-react";

import { createApp } from "../services/AppService";
import { useNavigate } from "react-router-dom";

const CreateApp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    companyName: "",
    position: "",
    status: "Applied",
    coldMailStatus: "Not Sent",
    location: "Remote",
    appliedDate: "",
    deadlineDate: "",
    jobLink: "",
    notes: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    const res = await createApp(formData);
    console.log("create response:", res);

    navigate("/home");
  };

  const updateField = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  return (
    <div className="flex min-h-[90vh] items-center justify-center bg-[#f7f5fb] px-4 py-10">

      <form
        onSubmit={onSubmit}
        className="w-full max-w-4xl rounded-2xl border border-gray-200 bg-white shadow-sm"
      >

        {/* Header */}
        <div className="flex items-center justify-between border-b px-6 py-5">

          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-indigo-100 p-2">
              <Plus className="h-5 w-5 text-indigo-700" />
            </div>

            <h1 className="text-3xl font-bold text-gray-900">
              New Application
            </h1>
          </div>

          <button
            type="button"
            onClick={() => navigate("/home")}
            className="text-gray-500 transition hover:text-black"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Form Body */}
        <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2">

          {/* Company */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Company Name
            </label>

            <div className="relative">
              <Building2 className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                required
                placeholder="e.g. Google, Stripe"
                value={formData.companyName}
                onChange={(e) =>
                  updateField("companyName", e.target.value)
                }
                className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-4 text-gray-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </div>
          </div>

          {/* Position */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Job Title
            </label>

            <input
              type="text"
              required
              placeholder="e.g. Frontend Developer"
              value={formData.position}
              onChange={(e) =>
                updateField("position", e.target.value)
              }
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          {/* Location Type */}
          // Replace your current "Location Type" section with this

<div>
  <label className="mb-2 block text-sm font-semibold text-gray-700">
    Location
  </label>

  <input
    type="text"
    placeholder="e.g. Remote, New York, Bangalore"
    value={formData.location}
    onChange={(e) => updateField("location", e.target.value)}
    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
  />
</div>

          {/* Application Link */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Application Link
            </label>

            <div className="relative">
              <Link2 className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                placeholder="https://careers..."
                value={formData.jobLink}
                onChange={(e) =>
                  updateField("jobLink", e.target.value)
                }
                className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-4 text-gray-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </div>
          </div>

          {/* Status */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Current Status
            </label>

            <select
              value={formData.status}
              onChange={(e) =>
                updateField("status", e.target.value)
              }
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            >
              <option>Applied</option>
              <option>Under Review</option>
              <option>Interview</option>
              <option>Rejected</option>
              <option>Accepted</option>
            </select>
          </div>

          {/* Applied Date */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Date Applied
            </label>

            <div className="relative">
              <CalendarDays className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

              <input
                type="date"
                value={formData.appliedDate}
                onChange={(e) =>
                  updateField("appliedDate", e.target.value)
                }
                className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-4 text-gray-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </div>
          </div>
          // Add this BELOW "Date Applied"

<div>
  <label className="mb-2 block text-sm font-semibold text-gray-700">
    Deadline Date
  </label>

  <div className="relative">
    <CalendarDays className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

    <input
      type="date"
      value={formData.deadlineDate}
      onChange={(e) =>
        updateField("deadlineDate", e.target.value)
      }
      className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-4 text-gray-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
    />
  </div>
</div>

          {/* Notes */}
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Notes
            </label>

            <textarea
              rows={5}
              placeholder="Mention recruiters, interview prep, requirements..."
              value={formData.notes}
              onChange={(e) =>
                updateField("notes", e.target.value)
              }
              className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-4 border-t px-6 py-5">

          <button
            type="button"
            onClick={() => navigate("/apps")}
            className="px-5 py-2.5 text-sm font-semibold text-gray-600 transition hover:text-black"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="rounded-xl bg-indigo-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-800"
          >
            Save Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateApp;