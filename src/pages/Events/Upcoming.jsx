import React, { use, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { CalendarDays, MapPin, Search, Tag } from "lucide-react";
import { AuthContext } from "../../context/AuthProvider";
import { motion } from "motion/react";

const Upcoming = () => {
  //const event = useLoaderData();
  const [search, setSearch] = useState("");
  const [event, setEvent] = useState([]);
  const [type, setType] = useState("");
  const [allEventTypes, setAllEventTypes] = useState([]);

  //console.log(search);

  const { loader } = use(AuthContext);

  if (loader) {
    return (
      <div className="fixed bg-white inset-0 z-50 flex items-center justify-center  bg-opacity-50">
        <span className="loading loading-bars loading-xl text-green-600"></span>
      </div>
    );
  }

  const fetchEvents = async () => {
    let url = "https://save-tree-org-server.vercel.app/events?";
    if (search) url += `search=${search}`;
    if (type) url += `type=${type}`;

    const res = await fetch(url);
    const data = await res.json();
    setEvent(data);

    try {
      const allRes = await fetch(
        "https://save-tree-org-server.vercel.app/events"
      );
      const allData = await allRes.json();
      const types = [...new Set(allData.map((e) => e.eventInfo.eventType))];
      setAllEventTypes(types);
    } catch (err) {
      console.error("Failed to fetch all event types", err);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, [search, type]);

  return (
    <div>
      <div className="min-h-screen  py-10 px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center text-center gap-4 mb-10">
          <div className="flex items-center gap-2">
            <h4 className="w-40">Filter Event: </h4>
            <select
              className="select border p-2 rounded"
              onChange={(e) => setType(e.target.value)}
              value={type}
            >
              <option value="">All Types</option>
              {allEventTypes.map((eventType) => (
                <option key={eventType} value={eventType}>
                  {eventType}
                </option>
              ))}
            </select>
          </div>

          <div>
            <h1 className="text-3xl font-bold text-center">Upcoming Events</h1>
          </div>

          <div>
            <label className="input input-bordered flex items-center gap-2">
              <Search className="w-4 h-4 text-gray-500" />
              <input
                type="search"
                name="search"
                className="grow w-[300px] "
                placeholder="Search by name"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
            </label>
          </div>
        </div>

        {event.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[500px] text-center text-gray-600 animate-fade-in">
            <div className="bg-green-100 text-green-600 p-4 rounded-full mb-4 shadow-sm">
              <CalendarDays className="w-12 h-12" />
            </div>
            <h2 className="text-2xl font-semibold  mb-1">No Events Found</h2>
            <p className="text-gray-500 text-sm">
              Try changing your filters or search to find something.
            </p>
          </div>
        ) : (
          <motion.div
            animate={{
              x: [-280, 0],
              transition: {
                duration: 1,
              },
            }}
            className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
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

export default Upcoming;
