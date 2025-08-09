import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Registration from "../pages/Registration/Registration";
import Login from "../pages/Login/Login";
import CreateEvent from "../pages/Events/CreateEvent";
import UpcomingEvent from "../pages/Events/Upcoming";
import JoinedEvent from "../pages/Events/JoinedEvent";
import ManageEvent from "../pages/Events/ManageEvent";
import RestrictedPages from "../components/RestrictedPages";
import EventDetails from "../pages/Events/EventDetails";
import UpdateEventForm from "../pages/Events/UpdateEventForm";
import ErrorPage from "../components/ErrorPage";
import { lazy, Suspense } from "react";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";

const UpcomingEvents = lazy(() => import("../pages/Events/Upcoming"));

const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <span className="loading loading-bars loading-lg text-green-600"></span>
  </div>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/create-event",
        element: (
          <RestrictedPages>
            <CreateEvent />
          </RestrictedPages>
        ),
      },
      {
        path: "/manage-event",
        element: (
          <RestrictedPages>
            <ManageEvent />
          </RestrictedPages>
        ),
      },
      {
        path: "/joined-event",
        element: (
          <RestrictedPages>
            <JoinedEvent />
          </RestrictedPages>
        ),
      },
      {
        path: "/upcoming-event",
        element: (
          <Suspense fallback={<PageLoader />}>
            <UpcomingEvents />
          </Suspense>
        ),
        loader: () => fetch("https://save-tree-org-server.vercel.app/events"),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/upcoming-event/:id",
        element: (
          <RestrictedPages>
            <EventDetails />
          </RestrictedPages>
        ),
        loader: ({ params }) =>
          fetch(`https://save-tree-org-server.vercel.app/events/${params.id}`),
      },
      {
        path: "/events/update-event/:id",
        element: (
          <RestrictedPages>
            <UpdateEventForm />
          </RestrictedPages>
        ),
        loader: ({ params }) =>
          fetch(`https://save-tree-org-server.vercel.app/events/${params.id}`),
      },
    ],
  },
]);
