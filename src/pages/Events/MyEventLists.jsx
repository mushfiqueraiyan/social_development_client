import React, { use } from "react";
import { CalendarDays, CalendarX2, MapPin, Tag } from "lucide-react";
import { Link } from "react-router";
import { AuthContext } from "../../context/AuthProvider";
import { motion } from "motion/react";

const MyEventLists = ({ myEventPromise }) => {
  const myEvents = use(myEventPromise);

  const { loader } = use(AuthContext);

  if (loader) {
    return (
      <div className="fixed bg-white inset-0 z-50 flex items-center justify-center  bg-opacity-50">
        <span className="loading loading-bars loading-xl text-green-600"></span>
      </div>
    );
  }

  return (
    <div>
      <div className="min-h-screen py-10 px-4 ">
        <h1 className="text-3xl font-bold text-center mb-10">
          My Created Events
        </h1>

        {myEvents.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[500px] text-center text-gray-600 animate-fade-in">
            <div className="bg-green-100 text-green-600 p-4 rounded-full mb-4 shadow-sm">
              <CalendarX2 className="w-12 h-12" />
            </div>
            <h2 className="text-2xl font-semibold  mb-1">
              You Haven't Created any event yet!
            </h2>

            <Link
              to={"/create-event"}
              className="btn bg-green-700 text-white mt-5"
            >
              Create Event
            </Link>
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
            {myEvents.map((event) => (
              <div
                key={event._id}
                className=" rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <img
                  src={event.eventInfo.thumbnailUrl}
                  alt={event.eventInfo.title}
                  className="w-full h-52 object-cover"
                />

                <div className="p-5 space-y-3">
                  <h2 className="text-xl font-semibold ">
                    {event.eventInfo.title}
                  </h2>

                  <div className="text-sm text-gray-400 space-y-1">
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

                  <div className="flex justify-between gap-2 pt-4">
                    <Link
                      to={`/events/update-event/${event._id}`}
                      className="btn flex-1 bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-medium py-2 rounded-lg transition duration-200"
                    >
                      Update
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

export default MyEventLists;
