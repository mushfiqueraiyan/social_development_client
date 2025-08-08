import React, { use } from "react";
import Banner from "./Banner";
import Features from "./Features";
import Gallery from "./Gallery";
import Newsletter from "./Newsletter";
import { AuthContext } from "../../context/AuthProvider";
import Events from "./Events";

const Home = () => {
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
      <Banner />
      <Features />
      <Events />
      <Gallery />
      <Newsletter />
    </div>
  );
};

export default Home;
