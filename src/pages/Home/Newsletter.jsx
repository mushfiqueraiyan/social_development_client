import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-green-100 py-16 px-4 md:px-12 max-w-7xl mx-auto rounded-lg mb-10">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
          Stay Connected with Community Updates
        </h2>
        <p className="text-gray-700 mb-8 text-lg">
          Subscribe to our newsletter and get notified about upcoming social
          events, volunteering opportunities, and community news.
        </p>

        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className=" input bg-transparent w-full sm:w-2/3 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
