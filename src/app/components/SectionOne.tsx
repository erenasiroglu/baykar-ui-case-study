"use client";
import React, { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white flex items-center justify-between h-[80px] px-8 text-white">
      <div className="flex items-center lg:order-2">
        <button className="flex items-center bg-customPurple text-white p-2 rounded-full">
          <Image
            src="/icons/app-logo.svg"
            alt="app-logo"
            width={24}
            height={24}
          />
        </button>
        <span className="text-customTitle font-semibold ml-2">Logo</span>
      </div>

      <div className="lg:order-1 flex items-center lg:gap-4 text-[16px] font-medium">
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } lg:flex flex-col lg:flex-row absolute lg:relative top-[80px] lg:top-0 left-0 w-full lg:w-auto bg-white lg:bg-transparent p-4 lg:p-0 gap-2 lg:gap-4`}
        >
          <button className="text-customTitle p-2 rounded-full hover:bg-customHover">
            Home
          </button>
          <button className="text-customTitle p-2 rounded-full hover:bg-customHover">
            About
          </button>
          <button className="text-customTitle p-2 rounded-full hover:bg-customHover">
            Listing
          </button>
          <button className="text-customTitle p-2 rounded-full hover:bg-customHover">
            Services
          </button>
          <button className="text-customTitle p-2 rounded-full hover:bg-customHover">
            Blogs
          </button>
        </div>
      </div>

      <button
        className="lg:hidden order-3"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Image src="/icons/detail-icon.svg" alt="menu" width={24} height={22} />
      </button>

      <div className="hidden lg:flex items-center gap-4 lg:order-3">
        <button className="flex items-center gap-2 flex-row">
          <Image src="/icons/user.svg" alt="user" width={18} height={18} />
          <span className="text-customTitle font-normal">Login/Register</span>
        </button>
        <button className="bg-customPurple text-white w-[169px] h-[50px] rounded-full flex items-center justify-center gap-2">
          <Image src="/icons/app-logo.svg" alt="user" width={20} height={20} />
          <span>Add Listing</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
