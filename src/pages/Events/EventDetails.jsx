import React, { use } from "react";
import { useLoaderData } from "react-router";
import { CalendarDays, MapPin, Tag, User } from "lucide-react";
import { AuthContext } from "../../context/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";

const EventDetails = () => {
  const eventDetail = useLoaderData();
  const { title, description, eventType, thumbnailUrl, location, eventDate } =
    eventDetail.eventInfo;

  const { host, ...event } = eventDetail;

  const { user } = use(AuthContext);

  const handleJoinedEvent = () => {
    const joinedEvent = {
      participant: user.email,
      event,
    };

    axios
      .post("https://save-tree-org-server.vercel.app/joined", joinedEvent)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Joined Event has been success");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br  py-10 px-4">
        <div className="max-w-7xl mx-auto rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2 gap-6">
          {/* Left - Image */}
          <div className="h-full w-full">
            <img
              src={thumbnailUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right - Content */}
          <div className="p-8 flex flex-col justify-between space-y-6">
            {/* Title */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold  mb-2">{title}</h1>
              <p className="text-gray-400 text-base leading-relaxed">
                {description}
              </p>
            </div>

            {/* Info */}
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center gap-3">
                <MapPin className="text-blue-500 w-5 h-5" />
                <span className="font-medium">{location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Tag className="text-green-500 w-5 h-5" />
                <span>{eventType}</span>
              </div>
              <div className="flex items-center gap-3">
                <CalendarDays className="text-red-500 w-5 h-5" />
                <span>{eventDate}</span>
              </div>
            </div>

            {/* CTA */}
            <div>
              <button
                onClick={handleJoinedEvent}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-2.5 rounded-xl shadow-lg transition-all duration-200"
              >
                Join This Event
              </button>
              <p className="text-sm text-gray-400 text-center mt-2">
                Limited seats available. Don’t miss out!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
