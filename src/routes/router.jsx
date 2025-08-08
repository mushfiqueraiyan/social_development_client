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
        element: <UpcomingEvent />,
        loader: () => fetch("https://save-tree-org-server.vercel.app/events"),
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
