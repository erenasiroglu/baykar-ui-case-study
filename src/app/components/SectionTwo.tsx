"use client";
import React, { useState } from "react";
import Image from "next/image";
import BedroomSlider from "./BedroomSlider";

const SectionTwo = () => {
  const [formType, setFormType] = useState<"sale" | "rent">("sale");

  return (
    <div className="relative bg-white">
      <Image
        src="/images/rectangle-1.svg"
        alt="Background"
        fill
        className="absolute z-0"
      />

      <div className="relative z-10 container mx-auto px-8 pt-16">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
          <div className="w-full lg:max-w-[540px]">
            <h3 className="text-customPurple font-semibold text-base lg:text-[16px]">
              REAL ESTATE
            </h3>
            <h1 className="text-[39.8px] lg:text-[58px] font-semibold leading-tight mt-4 text-black">
              Find a perfect home you love..!
            </h1>
            <p className="text-gray-600 mt-4">
              Lorem Ipsum has been the industry&apos;s standard dummy text ever
              since the 1500s, when an unknown printer took a galley
            </p>

            <div className="mt-4 relative w-full h-[210px] lg:h-auto">
              <BedroomSlider />
            </div>
          </div>

          <div className="bg-white rounded-[30px] p-6 lg:p-8 w-full lg:w-[420px] h-[449px] lg:h-[582px] shadow-lg mx-auto max-w-[333px] lg:max-w-none">
            <div className="flex justify-center gap-16 mb-4">
              <div className="relative">
                <span
                  className={`cursor-pointer text-base ${
                    formType === "sale" ? "text-customPurple" : "text-gray-500"
                  }`}
                  onClick={() => setFormType("sale")}
                >
                  For Sale
                </span>
                {formType === "sale" && (
                  <div className="absolute bottom-[-4px] left-0 w-full h-[1px] bg-customPurple" />
                )}
              </div>
              <div className="relative">
                <span
                  className={`cursor-pointer text-base ${
                    formType === "rent" ? "text-customPurple" : "text-gray-500"
                  }`}
                  onClick={() => setFormType("rent")}
                >
                  For Rent
                </span>
                {formType === "rent" && (
                  <div className="absolute bottom-[-4px] left-0 w-full h-[1px] bg-customPurple" />
                )}
              </div>
            </div>

            {formType === "sale" && (
              <div className="flex flex-col gap-3 lg:gap-4 pt-6">
                <input
                  type="text"
                  placeholder="New York, San Francisco, etc."
                  className="w-full h-[45px] lg:h-[59px] px-4 rounded-[20px] bg-[rgba(212,212,212,0.2)] text-sm lg:text-base placeholder:text-[rgba(170,170,170,1)]"
                />
                <select className="w-full h-[45px] lg:h-[59px] px-4 rounded-[20px] bg-[rgba(212,212,212,0.2)] text-sm lg:text-base text-[rgba(170,170,170,1)]">
                  <option value="">Select Property Type</option>
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="condo">Condo</option>
                </select>
                <select className="w-full h-[45px] lg:h-[59px] px-4 rounded-[20px] bg-[rgba(212,212,212,0.2)] text-sm lg:text-base text-[rgba(170,170,170,1)]">
                  <option value="">Select Rooms</option>
                  <option value="1">1 Room</option>
                  <option value="2">2 Rooms</option>
                  <option value="3">3 Rooms</option>
                  <option value="4">4+ Rooms</option>
                </select>

                <div className="pt-2">
                  <span className="text-customPurple text-sm lg:text-customSize cursor-pointer">
                    Advance Search
                  </span>
                </div>

                <div className="pt-4">
                  <button className="w-full h-[45px] lg:h-[60px] bg-customPurple text-white rounded-full text-sm lg:text-base">
                    Search
                  </button>
                </div>
              </div>
            )}

            {formType === "rent" && (
              <div className="flex flex-col gap-3 lg:gap-4 pt-6">
                <input
                  type="text"
                  placeholder="New York, San Francisco, etc."
                  className="w-full h-[45px] lg:h-[59px] px-4 rounded-[20px] bg-[rgba(212,212,212,0.2)] text-sm lg:text-base placeholder:text-[rgba(170,170,170,1)]"
                />
                <select className="w-full h-[45px] lg:h-[59px] px-4 rounded-[20px] bg-[rgba(212,212,212,0.2)] text-sm lg:text-base text-[rgba(170,170,170,1)]">
                  <option value="">Select Property Type</option>
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="condo">Condo</option>
                </select>
                <select className="w-full h-[45px] lg:h-[59px] px-4 rounded-[20px] bg-[rgba(212,212,212,0.2)] text-sm lg:text-base text-[rgba(170,170,170,1)]">
                  <option value="">Price Range</option>
                  <option value="0-1000">$0 - $1,000</option>
                  <option value="1000-2000">$1,000 - $2,000</option>
                  <option value="2000-3000">$2,000 - $3,000</option>
                  <option value="3000+">$3,000+</option>
                </select>

                <div className="pt-2">
                  <span className="text-customPurple text-sm lg:text-customSize cursor-pointer">
                    Advance Search
                  </span>
                </div>

                <div className="pt-4">
                  <button className="w-full h-[45px] lg:h-[60px] bg-customPurple text-white rounded-full text-sm lg:text-base">
                    Search
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-16 pb-16">
          <Image
            src="/images/customers.svg"
            alt="Our Customers"
            width={810}
            height={200}
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
