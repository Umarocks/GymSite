import React from "react";
import NavList from "./NavList";
import Logo from "../../../images/logo/logo.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [spin, setSpin] = useState(false);

  const joinSpin = () => {
    setSpin(true);
  };

  const stopSpin = () => {
    setSpin(false);
  };
  return (
    <>
      <nav className="flex flex-row bg-transparent items-center justify-between py-8 px-12 fixed top-0 left-0 right-0 w-full z-50">
        <a href="/">
          <img className="w-full h-auto" src={Logo} alt="Logo" />
        </a>
        <NavList />
        <div className="flex items-center gap-10">
          <div className="flex gap-10">
            {/* black ==white */}
            <i className="fa-solid fa-magnifying-glass text-black text-4xl cursor-pointer "></i>
            <i className=" fa-regular fa-chart-bar text-black text-4xl cursor-pointer "></i>
          </div>
          <div className="fa-regular fa-chart-bar text-black cursor-pointer"></div>
        </div>
        <div className="border-[rgb(255,255,255,0.3)] border-solid border-2  p-2 rounded-md">
          <Link
            onMouseEnter={joinSpin}
            onMouseLeave={stopSpin}
            className="flex items-center"
          >
            <i
              className={`fa-solid fa-plus bg-[#FF0336] text-white text-2xl py-3 px-4 rounded-md ${
                spin ? "nav-btn-hover" : ""
              }`}
            ></i>
            <h3 className="text-white text-[14px] font-bold uppercase ml-4 mr-8 tracking-wider">
              join class now
            </h3>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
