"use client";
import React from "react";
import Image from "next/image";

const SectionThree = () => {
  return (
    <div className="bg-white container mx-auto px-8 py-16">
      <div className="flex justify-between gap-16">
        <div className="flex-1">
          <h3 className="text-[19.4px] text-customBlue font-semibold">
            WHO ARE WE
          </h3>
          <h2 className="text-[39.8px] text-black font-semibold leading-tight mt-4">
            Assisting individuals in locating the appropriate real estate.
          </h2>
          <p className="text-base font-normal text-gray-600 mt-4">
            Lorem Ipsum has been the industry&apos;s standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it
          </p>

          <div className="flex flex-col gap-6 mt-8">
            <div className="flex items-start bg-white rounded-[30px] p-6 shadow-lg w-[400px] h-[131px]">
              <div className="flex-shrink-0 mr-4">
                <Image
                  src="/icons/smart-home.svg"
                  alt="Icon 1"
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <h4 className="font-semibold text-customBlue text-lg mb-2">
                  Find Your Dream Home
                </h4>
                <p className="text-gray-600 text-sm">
                  when an unknown printer took a galley
                </p>
              </div>
            </div>

            <div className="flex items-start bg-white rounded-[30px] p-6 shadow-lg w-[400px] h-[131px]">
              <div className="flex-shrink-0 mr-4">
                <Image
                  src="/icons/user-actagon.svg"
                  alt="Icon 2"
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <h4 className="font-semibold text-customBlue text-lg mb-2">
                  Best Real Estate Deals
                </h4>
                <p className="text-gray-600 text-sm">
                  when an unknown printer took a galley
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-6">
          <div className="w-[280px] h-[500px] relative">
            <Image
              src="/images/otel.svg"
              alt="Property 1"
              fill
              className="rounded-[30px] object-fill"
            />
          </div>

          <div className="flex flex-col gap-6">
            <div className="w-[277px] h-[280px] relative">
              <Image
                src="/images/room.svg"
                alt="Property 2"
                fill
                className="rounded-[30px] object-fill"
              />
            </div>
            <div className="w-[277px] h-[180px] relative">
              <Image
                src="/images/home.svg"
                alt="Property 3"
                fill
                className="rounded-[30px] object-fill"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
