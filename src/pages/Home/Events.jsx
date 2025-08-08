import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CalendarDays, MapPin, Tag } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";

const Events = () => {
  const { data: upcomingEvent = [], isPending } = useQuery({
    queryKey: ["event"],
    queryFn: async () => {
      const res = await axios.get(
        "https://save-tree-org-server.vercel.app/events"
      );
      return res.data;
    },
  });

  if (isPending) {
    return (
      <span className="loading loading-bars loading-xl text-green-600"></span>
    );
  }

  const event = upcomingEvent.slice(0, 3);

  return (
    <div>
      <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
        Upcoming Events
      </h2>

      <div className="max-w-7xl mx-auto">
        {event.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[500px] text-center text-gray-600 animate-fade-in">
            <div className="bg-green-100 text-green-600 p-4 rounded-full mb-4 shadow-sm">
              <CalendarDays className="w-12 h-12" />
            </div>
            <h2 className="text-2xl font-semibold  mb-1">
              No Upcoming Events Found
            </h2>
          </div>
        ) : (
          <motion.div
            animate={{
              x: [-280, 0],
              transition: {
                duration: 1,
              },
            }}
            className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          >
            {event.map((event) => (
              <div
                key={event._id}
                className=" rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden"
              >
                <div className="p-5">
                  <img
                    src={event.eventInfo.thumbnailUrl}
                    alt={event.eventInfo.title}
                    className="w-full h-52 object-cover mb-3 rounded-2xl"
                  />
                  <h2 className="text-xl font-semibold mb-3 ">
                    {event.eventInfo.title}
                  </h2>
                  <div className="space-y-2 text-sm text-gray-400">
                    <p className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-500" />
                      {event.eventInfo.location}
                    </p>
                    <p className="flex items-center gap-2">
                      <Tag className="w-4 h-4 text-green-500" />
                      {event.eventInfo.eventType}
                    </p>
                    <p className="flex items-center gap-2">
                      <CalendarDays className="w-4 h-4 text-red-500" />
                      {event.eventInfo.eventDate}
                    </p>
                  </div>

                  <div className="mt-5">
                    <Link
                      to={`/upcoming-event/${event._id}`}
                      className="btn w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200"
                    >
                      View Event
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Events;
