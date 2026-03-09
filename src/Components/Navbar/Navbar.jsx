import React, { useState } from "react";
import Logo from "../../assets/image/logo.png";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLinkedinIn, FaBarsStaggered } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" sticky top-0 z-1 bg-[#F4F4F4] shadow-nav py-5.5 px-2.5 md:py-4.75 md:px-0">
      <div className="container py-2.5 flex items-center justify-between">
        <div className="z-50">
          <img src={Logo} alt="Logo" />
        </div>

        <div
          className={`
      absolute md:static top-full left-0 w-full md:w-auto bg-[#F4F4F4] md:bg-transparent
      transition-all duration-300 ease-in-out z-40
      ${isOpen ? "block" : "hidden md:block"}
    `}
        >
          <ul className="nav-bar flex flex-col md:flex-row items-center gap-4 p-5 md:py-3.5 md:px[16px]">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Project</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
          <div className="md:hidden">
            <ul className="flex items-center justify-center *:p-3.25 *:rounded-full gap-2 *:bg-[#0A0A0A]/6 text-heading">
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaLinkedinIn />
              </li>
              <li>
                <FaTwitter />
              </li>
              <li>
                <TiSocialFacebook />
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <ul className="hidden md:flex items-center *:p-3.25 *:rounded-full gap-2 *:bg-[#0A0A0A]/6 text-heading">
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaLinkedinIn />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <TiSocialFacebook />
            </li>
          </ul>

          <button
            className="md:hidden text-2xl flex items-baseline-last justify-center bg-primary text-white py-[9.5px] px-3 rounded-full cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaBarsStaggered />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
