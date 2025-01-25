import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="bg-white flex items-center justify-between h-[80px] px-8 text-white">
      <div className="flex items-center gap-4 text-[16px] font-medium">
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

      <div className="flex items-center justify-center flex-grow">
        <div className="flex items-center bg-customPurple text-white p-2 rounded-full">
          <Image
            src="/icons/app-logo.svg"
            alt="app-logo"
            width={24}
            height={24}
          />
        </div>
        <span className="text-customTitle font-semibold ml-2">Logo</span>
      </div>

      <div className="flex items-center space-x-4 ml-auto">
        <Image src="/icons/user.svg" alt="user" width={18} height={18} />
        <span className="text-customTitle font-normal">Login/Register</span>
        <button className="bg-customPurple text-white p-2 rounded-full w-[169px] flex items-center justify-center gap-4">
          <Image src="/icons/app-logo.svg" alt="user" width={20} height={20} />
          <span>Add Listing</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
