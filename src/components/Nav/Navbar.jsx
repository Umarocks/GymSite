import React from "react";
import NavList from "./NavList";
import Logo from "../../../images/logo/logo.svg";
function Navbar() {
  return (
    <>
      <nav className="flex flex-row bg-transparent items-center justify-between py-8 px-12 fixed top-0 left-0 right-0 w-full z-50">
        <a className="text-red-600" href="/">
          <img className="w-full h-auto" src={Logo} alt="Logo" />I AM GOOD
        </a>
        <NavList />
      </nav>
    </>
  );
}

export default Navbar;
