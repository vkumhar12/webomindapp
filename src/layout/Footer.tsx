/* eslint-disable @next/next/no-img-element */
import { CiTwitter } from "react-icons/ci";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RiMailSendLine } from "react-icons/ri";
import { RxInstagramLogo } from "react-icons/rx";

const Footer = () => {
  return (
    <footer className="bg-[#0B1941] text-white pt-14 flex flex-col gap-10">
      <div className="flex flex-col gap-3 justify-center items-center">
        <h1 className="text-3xl font-medium text-white text-center">
          Leverage technology to streamline <br /> credit-linked insurance
        </h1>
        <p className="text-center text-sm">
          Share a few quick details to understand how we can best help.
        </p>
        <button className="w-fit px-5 py-2 text-blue-600 font-medium flex items-center bg-white text-center rounded-r-full rounded-l-full text-xs">
          <span>Lets Talk</span>
          <span>
            <MdOutlineKeyboardArrowRight className="text-xl mt-0.5" />
          </span>
        </button>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-10 flex flex-col items-center justify-center border border-black bg-white text-[#0B1941] rounded-t-xl">
        <div className="flex justify-between items-start flex-wrap  ">
          <div className="mb-5 w-full flex justify-between">
            <img src="logo.png" alt="Webomindapps Logo" className="h-8" />
            <div className="flex items-center gap-2 text-gray-600">
              <button className="rounded-full border border-gray-300 p-2.5 font-medium">
                <CiTwitter className="font-medium text-sm" />
              </button>
              <button className="rounded-full border border-gray-300 text-gray-500 w-9 h-9  text-center text-sm">
                in
              </button>
              <button className="rounded-full border border-gray-300 p-2.5 font-medium">
                <RxInstagramLogo className="font-medium text-sm" />
              </button>
            </div>
          </div>
          <div className="w-full h-0.5 bg-gray-200 mb-5"></div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 lg:grid-cols-4 w-full">
            <div>
              <h3 className="text-lg font-semibold">Products</h3>
              <ul className="mt-4 space-y-2">
                <li>Retail Insurance</li>
                <li>LendPro</li>
                <li>EmbedPro</li>
                <li>Console</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Industries</h3>
              <ul className="mt-4 space-y-2">
                <li>Insurance Brokers</li>
                <li>Banks</li>
                <li>NBFCs</li>
                <li>Fintech</li>
                <li>Embedded Insurance</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Other Links</h3>
              <ul className="mt-4 space-y-2">
                <li>About Us</li>
                <li>Careers</li>
                <li>News & Media</li>
                <li>APIs</li>
                <li>Case Studies</li>
                <li>Blogs</li>
                <li>FAQs</li>
              </ul>
            </div>

            <div className="w-full">
              <h3 className="text-lg font-semibold mb-5">Get in Touch</h3>
              <form action="" className="flex flex-col gap-5 w-full">
                <div className="flex items-center gap-2 pb-4 border-b-2 w-full">
                  <span>
                    <RiMailSendLine />
                  </span>
                  <input
                    type="text"
                    placeholder="Info@youremailid"
                    className="w-full"
                  />
                </div>
                <div className="flex items-center gap-2 pb-4 border-b-2 w-full">
                  <span>
                    <LuPhoneCall />
                  </span>
                  <input type="number" placeholder="Phone no" />
                </div>
              </form>

              <button className="mt-4 bg-blue-700 text-white py-2 px-4 rounded-l-full rounded-r-full hover:bg-blue-500 transition-all duration-300 ease-in-out flex items-center gap-1">
                <span> Contact us</span>
                <span>
                  <MdOutlineKeyboardArrowRight className="text-xl mt-0.5" />
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-10 border-t w-full border-gray-400 pt-6">
          <p>© 2024 Webomindapps. Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
