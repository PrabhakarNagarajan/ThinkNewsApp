import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-slate-500 p-5 items-center">
      <div className="font- text-white">Think News App</div>
      <nav className="flex justify-end">
        <ul className="flex gap-6 text-white">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="entertainment">Entertainment</Link>
          </li>
          <li>
            <Link to="business">Business</Link>
          </li>
          <li>
            <Link to="sports">Sports</Link>
          </li>
          <li>
            <Link to="tech">Technology</Link>
          </li>
          <li>
            <Link to="science">Science</Link>
          </li>
          <li>
            <Link to="health">Health</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
