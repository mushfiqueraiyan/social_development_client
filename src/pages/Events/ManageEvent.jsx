import React, { Suspense, use } from "react";
import { AuthContext } from "../../context/AuthProvider";
import MyEventLists from "./MyEventLists";

const myEventPromise = (email) => {
  return fetch(
    `https://save-tree-org-server.vercel.app/events?email=${email}`
  ).then((res) => res.json());
};
const ManageEvent = () => {
  const { user, loader } = use(AuthContext);

  return (
    <div>
      <Suspense
        fallback={
          <div className="fixed bg-white inset-0 z-50 flex items-center justify-center  bg-opacity-50">
            <span className="loading loading-bars loading-xl text-green-600"></span>
          </div>
        }
      >
        <MyEventLists myEventPromise={myEventPromise(user.email)} />
      </Suspense>
    </div>
  );
};

export default ManageEvent;
