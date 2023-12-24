import React from "react";
import { Link } from "react-router-dom";
function NavList() {
  return (
    <>
      <ul className="flex gap-9 text-white text-[16px] font-medium">
        <li className="curson-pointer">
          <Link>Home</Link>
        </li>
        <li className="curson-pointer">
          <Link>About</Link>
        </li>
        <li className="curson-pointer">
          <Link>Featured</Link>
        </li>
        <li className="curson-pointer">
          <Link>Team</Link>
        </li>
        <li className="curson-pointer">
          <Link>Gallery</Link>
        </li>
        <li className="curson-pointer">
          <Link>Pricing</Link>
        </li>
        <li className="curson-pointer">
          <Link>Blog</Link>
        </li>
        <li className="curson-pointer">
          <Link>Contact</Link>
        </li>
      </ul>
    </>
  );
}

export default NavList;
