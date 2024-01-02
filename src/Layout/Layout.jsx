import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";

const Layout = () => {
  return (
    <div>
      <div className="sm:sticky sm:top-0 z-50 sm:w-100vw sm:bg-white">
        <Navbar />
      </div>

      <div className="  z-50 w-90vw">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
