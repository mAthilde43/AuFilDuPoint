// Layout.js
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";

const Layout = ({ hideHeader, hideNavbar }) => {
  return (
    <div>
      {!hideNavbar && <Navbar />}
      {!hideHeader && <Header />}
      <Outlet />
    </div>
  );
};

export default Layout;
