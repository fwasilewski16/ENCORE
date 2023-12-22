import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./pages/Root";
import Homepage from "./pages/Homepage";
import EventsPage from "./pages/EventsPage";
import EventSinglePage from "./pages/EventSinglePage";
import ArtistsPage from "./pages/ArtistsPage";
import ArtistsSinglePage from "./pages/ArtistSinglePage";
import BlogPage from "./pages/BlogPage";
import BlogSinglePage from "./pages/BlogSinglePage";
import StreamsPage from "./pages/StreamsPage";

const router = createBrowserRouter([
  {
    path: "/ENCORE/",
    element: <Root />,
    children: [
      { path: "/ENCORE/", element: <Homepage /> },
      { path: "/ENCORE/events", element: <EventsPage /> },
      { path: "/ENCORE/events/:event_id", element: <EventSinglePage /> },
      { path: "/ENCORE/artists", element: <ArtistsPage /> },
      { path: "/ENCORE/artists/:artist_id", element: <ArtistsSinglePage /> },
      { path: "/ENCORE/blog", element: <BlogPage /> },
      { path: "/ENCORE/blog/:blog_id", element: <BlogSinglePage /> },
      { path: "/ENCORE/streams", element: <StreamsPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
