import React, { use } from "react";
import { CalendarDays, CalendarX2, MapPin, Tag } from "lucide-react";
import { Link } from "react-router";
import { motion } from "motion/react";

const JoinedEventLists = ({ joinedEventPromise }) => {
  const joinedEvent = use(joinedEventPromise);

  return (
    <div>
      <div className="min-h-screen px-4 py-10 md:px-8">
        <h1 className="text-3xl font-bold text-center mb-10">Joined Events</h1>

        {joinedEvent.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[500px] text-center text-gray-600 animate-fade-in">
            <div className="bg-green-100 text-green-600 p-4 rounded-full mb-4 shadow-sm">
              <CalendarX2 className="w-12 h-12" />
            </div>
            <h2 className="text-2xl font-semibold  mb-1">
              You Haven't Joined any event yet!
            </h2>

            <Link
              to={"/upcoming-event"}
              className="btn bg-green-700 text-white mt-5"
            >
              Explore Events
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
            {joinedEvent.map(({ _id, event }) => (
              <div
                key={_id}
                className=" rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 overflow-hidden"
              >
                <img
                  src={event.eventInfo.thumbnailUrl}
                  alt={event.eventInfo.title}
                  className="w-full h-52 object-cover"
                />
                <div className="p-5 space-y-2">
                  <h2 className="text-xl font-semibold ">
                    {event.eventInfo.title}
                  </h2>
                  <p className="text-sm text-gray-400 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    {event.eventInfo.location}
                  </p>
                  <p className="text-sm text-gray-400 flex items-center gap-2">
                    <Tag className="w-4 h-4 text-green-500" />
                    {event.eventInfo.eventType}
                  </p>
                  <p className="text-sm text-gray-400 flex items-center gap-2">
                    <CalendarDays className="w-4 h-4 text-red-500" />
                    {event.eventInfo.eventDate}
                  </p>
                  <Link
                    to={`/upcoming-event/${event._id}`}
                    className=" btn w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg text-sm transition"
                  >
                    View Event
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default JoinedEventLists;
