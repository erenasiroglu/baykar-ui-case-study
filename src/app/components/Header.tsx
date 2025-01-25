import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="bg-customPurple flex items-center justify-between h-[40px] px-8 text-white">
      <div className="flex items-center">
        <Image
          src="/icons/location-icon.svg"
          alt="Location"
          width={12}
          height={16}
          className="mr-2"
        />
        <span className="text-customSize font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </span>
      </div>

      <div className="flex items-center space-x-4 ml-auto">
        <div className="flex items-center">
          <Image
            src="/icons/phone.svg"
            alt="Phone"
            width={12}
            height={16}
            className="mr-2"
          />
          <span className="text-customSize font-normal">+90123 45 67</span>
        </div>
        <div className="flex items-center">
          <Image
            src="/icons/mail-icon.svg"
            alt="Mail"
            width={12}
            height={16}
            className="mr-2"
          />
          <span className="text-customSize font-normal">mail@mail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
