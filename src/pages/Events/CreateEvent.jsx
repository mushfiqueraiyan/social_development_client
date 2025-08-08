import axios from "axios";
import React, { use, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const CreateEvent = () => {
  const [errors, setError] = useState({});
  const [eventDate, setEventDate] = useState(null);

  const { user } = use(AuthContext);

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
      setError(newErrors);
      return;
    }

    const events = {
      host: user.email,
      eventInfo,
    };

    axios
      .post("https://save-tree-org-server.vercel.app/events", events)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Event has been created");
          navigate("/upcoming-event");
        }
      })
      .catch((err) => {
        console.log(err);
      });

    //console.log(eventInfo);
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto p-8">
        <form
          onSubmit={handleForm}
          className=" rounded-2xl p-10 space-y-6 border border-gray-100"
        >
          <h2 className="text-3xl font-extrabold  mb-6">
            🌱 Create Tree Plantation Event
          </h2>

          <div>
            <label className="block  font-semibold mb-2">Title</label>
            <input
              type="text"
              name="title"
              className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title}</p>
            )}
          </div>

          <div>
            <label className="block  font-semibold mb-2">Description</label>
            <textarea
              name="description"
              rows={5}
              className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">{errors.description}</p>
            )}
          </div>

          <div>
            <label className="block  font-semibold mb-2">Event Type</label>
            <select
              name="eventType"
              className="w-full border border-gray-300 px-4 py-3 rounded-xl  focus:ring-2 focus:ring-green-500 focus:outline-none"
            >
              <option disabled={true} value="">
                Select Event Type
              </option>
              <option className="text-green-700" value="Tree Plantation">
                Tree Plantation
              </option>
              <option className="text-green-700" value="Donate for tree">
                Donate for tree
              </option>
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
              <option
                className="text-green-700"
                value="Tree plantation Seminar"
              >
                Tree plantation Seminar
              </option>
            </select>
            {errors.eventType && (
              <p className="text-red-500 text-sm mt-1">{errors.eventType}</p>
            )}
          </div>

          <div>
            <label className="block  font-semibold mb-2">
              Thumbnail Image URL
            </label>
            <input
              type="url"
              name="thumbnailUrl"
              className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
            {errors.thumbnailUrl && (
              <p className="text-red-500 text-sm mt-1">{errors.thumbnailUrl}</p>
            )}
          </div>

          <div>
            <label className="block  font-semibold mb-2">Location</label>
            <input
              type="text"
              name="location"
              className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
            {errors.location && (
              <p className="text-red-500 text-sm mt-1">{errors.location}</p>
            )}
          </div>

          <div>
            <label className="block  font-semibold mb-2">Event Date</label>
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
              className=" cursor-pointer w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-200"
            >
              🌍 Create Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
