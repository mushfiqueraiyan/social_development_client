import React from "react";
import { ArrowLeftCircle } from "lucide-react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 text-center text-gray-700">
        <h1 className="text-6xl font-extrabold text-green-600 mb-4 animate-pulse">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">
          Oops! Page not found.
        </h2>
        <p className="mb-6 text-gray-500 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition-all duration-200 shadow-md group"
        >
          <ArrowLeftCircle className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-1" />
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
