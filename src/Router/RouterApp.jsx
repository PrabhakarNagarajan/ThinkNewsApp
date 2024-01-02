import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Entertaiment from "../Pages/Entertaiment";
import Business from "../Pages/Business";
import Sports from "../Pages/Sports";
import Technology from "../Pages/Technology";
import Health from "../Pages/Health";
import Science from "../Pages/Science";
const RouterApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="entertainment" element={<Entertaiment />} />
          <Route path="business" element={<Business />} />
          <Route path="sports" element={<Sports />} />
          <Route path="health" element={<Health />} />
          <Route path="science" element={<Science />} />
          <Route path="tech" element={<Technology />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default RouterApp;
