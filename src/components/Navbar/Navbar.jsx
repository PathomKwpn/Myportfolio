import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiAlignJustify, FiMenu, FiX } from "react-icons/fi";
import { HashLink } from "react-router-hash-link";
const Navbar = () => {
  const [clickMenu, setClickMenu] = useState(false);
  const handleClick = () => setClickMenu(!clickMenu);
  return (
    <nav className="flex items-center justify-between bg-white h-[80px] w-full sticky z-50">
      <div className="flex justify-between w-[100%] text-[black] mx-[3rem] ">
        <div className="text-[30px] font-extrabold">PATHOM</div>
        <ul className="gap-[20px] hidden sm:flex items-center xl:gap-[40px]">
          <li className="hover:border-b-2 border-black">
            <Link className="font-bold xl:text-xl " to="/">
              HOME
            </Link>
          </li>
          <li className="hover:border-b-2 border-black">
            <Link className=" font-bold xl:text-xl" to="/">
              ABOUT
            </Link>
          </li>
          <li className="hover:border-b-2 border-black">
            <Link className=" font-bold xl:text-xl" to="/">
              PROJECTS
            </Link>
          </li>
          <li className="hover:border-b-2 border-black">
            <Link className=" font-bold xl:text-xl" to="/">
              CONTACT
            </Link>
          </li>
        </ul>
        <ul
          className={
            !clickMenu
              ? "hidden"
              : "gap-[40px] absolute md:hidden w-full h-screen top-[80px] left-0 bg-gray-500 flex flex-col items-center pt-[30px]"
          }
        >
          <li className="hover:border-b-2 border-[white]">
            <Link className="font-bold  text-[25px]" to="/">
              Home
            </Link>
          </li>
          <li className="hover:border-b-2">
            <Link className="font-bold text-[25px]" to="/">
              About
            </Link>
          </li>
          <li className="hover:border-b-2">
            <Link className="font-bold text-[25px]" to="/">
              Project
            </Link>
          </li>
          <li className="hover:border-b-2">
            <Link className="font-bold text-[25px]" to="/">
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex text-[40px] sm:hidden" onClick={handleClick}>
          {clickMenu ? <FiX /> : <FiMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
