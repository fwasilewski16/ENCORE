import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Root(): JSX.Element {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
