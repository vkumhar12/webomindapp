/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Navbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className="flex justify-between items-center py-5 px-16 bg-white shadow-md relative">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Webomindapps Logo" className="h-10" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-10">
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link href="#" className="hover:text-black">
            Products
          </Link>
          <Link href="#" className="hover:text-black">
            Industries
          </Link>
          <Link href="#" className="hover:text-black">
            Company
          </Link>
          <Link href="#" className="hover:text-black">
            Resources
          </Link>
        </div>
        <button className="bg-red-600 text-white px-6 py-2 rounded-full transition-all duration-300 ease-in-out hover:bg-red-400 flex items-center justify-center ">
          <span>Schedule Demo</span>
          <span className="mt-1">
            <MdOutlineKeyboardArrowRight className="text-xl" />
          </span>
        </button>
      </div>

      {/* Mobile Menu (Burger Icon) */}
      <div className="lg:hidden flex items-center">
        <button onClick={toggleDrawer} className="text-3xl">
          {isDrawerOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Left-Side Drawer for Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg z-40 w-64 transition-transform duration-300 ease-in-out ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col p-8 space-y-6 text-gray-700 font-medium">
          <img src="/logo.png" alt="Webomindapps Logo" className="h-10" />

          <Link href="#" className="hover:text-black">
            Products
          </Link>
          <Link href="#" className="hover:text-black">
            Industries
          </Link>
          <Link href="#" className="hover:text-black">
            Company
          </Link>
          <Link href="#" className="hover:text-black">
            Resources
          </Link>
          <button className="bg-red-600 text-white px-6 py-2 rounded-full whitespace-nowrap transition-all duration-300 ease-in-out hover:bg-red-400 flex items-center justify-center ">
            <span>Schedule Demo</span>
            <span className="mt-1">
              <MdOutlineKeyboardArrowRight className="text-xl" />
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
