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
      { path: "/", element: <Homepage /> },
      { path: "/events", element: <EventsPage /> },
      { path: "/events/:event_id", element: <EventSinglePage /> },
      { path: "/artists", element: <ArtistsPage /> },
      { path: "/artists/:artist_id", element: <ArtistsSinglePage /> },
      { path: "/blog", element: <BlogPage /> },
      { path: "/blog/:blog_id", element: <BlogSinglePage /> },
      { path: "/streams", element: <StreamsPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
