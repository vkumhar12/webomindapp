/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center py-5 px-16 bg-white shadow-md">
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Webomindapps Logo" className="h-10" />
      </div>
      <div className="flex items-center gap-10">
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
          <span className="">Schedule Demo</span>
          <span className="mt-1">
            <MdOutlineKeyboardArrowRight className="text-xl" />
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
