import axios from "axios";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData, useNavigate } from "react-router";
import { toast } from "react-toastify";

const UpdateEventForm = () => {
  const updateEvent = useLoaderData();
  const [errors, setErrors] = useState({});
  const [eventDate, setEventDate] = useState(
    updateEvent?.eventInfo?.eventDate
      ? new Date(updateEvent.eventInfo.eventDate)
      : null
  );
  const [eventType, setEventType] = useState(
    updateEvent.eventInfo.eventType || ""
  );

  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const eventInfo = Object.fromEntries(formData.entries());

    const requiredFields = [
      "title",
      "description",
      "eventType",
      "thumbnailUrl",
      "location",
      "eventDate",
    ];
    const newErrors = {};

    requiredFields.forEach((field) => {
      if (!eventInfo[field]) {
        newErrors[field] = `${field.replace(/([A-Z])/g, " $1")} is required`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const updateEvents = {
      eventInfo: eventInfo,
    };

    axios
      .put(
        `https://save-tree-org-server.vercel.app/events/${updateEvent._id}`,
        updateEvents
      )
      .then((res) => {
        if (res.data.modifiedCount) {
          toast.success("Updated successfully");
          navigate("/manage-event");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto p-8">
        <form
          onSubmit={handleForm}
          className=" rounded-2xl p-10 space-y-6 border border-gray-100"
        >
          <h2 className="text-3xl font-extrabold  mb-6">
            🌱 Update Tree Plantation Event
          </h2>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Title
            </label>
            <input
              type="text"
              defaultValue={updateEvent.eventInfo.title}
              name="title"
              className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Description
            </label>
            <textarea
              name="description"
              defaultValue={updateEvent.eventInfo.description}
              rows={5}
              className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">{errors.description}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700  font-semibold mb-2">
              Event Type
            </label>
            <select
              name="eventType"
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              className="w-full border border-gray-300 px-4 py-3 rounded-xl text-green-700 focus:ring-2 focus:ring-green-500 focus:outline-none"
            >
              <option disabled={true} value="">
                Select Event Type
              </option>
              <option value="Tree Plantation">Tree Plantation</option>
              <option value="Donate for tree">Donate for tree</option>
              <option
                className="text-green-700"
                value=" Community Tree Plantation"
              >
                Community Tree Plantation
              </option>
              <option className="text-green-700" value="NGO Tree Drive">
                NGO Tree Drive
              </option>
              <option
                className="text-green-700"
                value="Religious Organization Tree Event"
              >
                Religious Organization Tree Event
              </option>
              <option value="Tree plantation Seminar">
                Tree plantation Seminar
              </option>
            </select>
            {errors.eventType && (
              <p className="text-red-500 text-sm mt-1">{errors.eventType}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Thumbnail Image URL
            </label>
            <input
              type="url"
              name="thumbnailUrl"
              defaultValue={updateEvent.eventInfo.thumbnailUrl}
              className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
            {errors.thumbnailUrl && (
              <p className="text-red-500 text-sm mt-1">{errors.thumbnailUrl}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Location
            </label>
            <input
              type="text"
              name="location"
              defaultValue={updateEvent.eventInfo.location}
              className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
            {errors.location && (
              <p className="text-red-500 text-sm mt-1">{errors.location}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Event Date
            </label>
            <DatePicker
              selected={eventDate}
              onChange={(date) => setEventDate(date)}
              minDate={new Date()}
              dateFormat="yyyy-MM-dd"
              className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholderText="yyyy-MM-dd"
              name="eventDate"
            />
            {errors.eventDate && (
              <p className="text-red-500 text-sm mt-1">{errors.eventDate}</p>
            )}
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="btn w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-200"
            >
              🌍 Create Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateEventForm;
