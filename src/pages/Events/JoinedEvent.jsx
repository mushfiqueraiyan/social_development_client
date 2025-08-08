import React, { Suspense, use } from "react";
import JoinedEventLists from "./JoinedEventLists";
import { AuthContext } from "../../context/AuthProvider";

const joinedEventPromise = (email) => {
  return fetch(
    `https://save-tree-org-server.vercel.app/joined?email=${email}`,
    {
      credentials: "include",
    }
  ).then((res) => res.json());
};

const JoinedEvent = () => {
  const { user } = use(AuthContext);

  return (
    <div>
      <Suspense
        fallback={
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-50">
            <span className="loading loading-bars loading-xl text-green-600"></span>
          </div>
        }
      >
        <JoinedEventLists joinedEventPromise={joinedEventPromise(user.email)} />
      </Suspense>
    </div>
  );
};

export default JoinedEvent;
