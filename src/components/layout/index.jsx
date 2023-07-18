import React from "react";
import { useState } from "react";
// import Header from '../../pages/header/Header';
// import Header from '../header';
import Header from "../header/index";
import SideBar from "../navigations/index";
import { Outlet } from "react-router-dom";
import Footer from "../footer";
import Dashboard from "../../pages/home/dashboard";

// import Footer from '../footer';
export default function Layout(props) {
  const [showSidebar, setShowSidebar] = useState(false);
  const handleSidebar = () => {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.remove("xs:hidden");
    setShowSidebar(true);
  };
  return (
    <div className="w-full h-screen  bg-gray-50 overflow-y-scroll">
      <div className="header">
        <Header />
      </div>
      <div className="w-full main-section flex">
        <div className="w-[5%] rounded-l-lg hidden md:block lg:block xl:block" style={{marginTop:"-48px"}}>
          <SideBar />
        </div>
        <div className="w-[100%] bg-gray-600 md:w-[95%] lg:w-[95%] xl:w-[95%]">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}
