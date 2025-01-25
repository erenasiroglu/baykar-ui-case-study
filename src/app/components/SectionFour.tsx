"use client";
import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";

type PropertyType = "all" | "sell" | "rent";

const properties = [
  {
    id: 1,
    title: "Tranquil Haven in the Woods",
    price: "$ 5,970",
    description: "103 Wright CourtBurien, WA 98168",
    image: "/images/section-four/rectangle-1.svg",
    type: "sell",
    badge: { text: "Popular", color: "bg-customPink", icon: "icon-fire" },
    specs: { beds: 3, baths: 4 },
  },
  {
    id: 2,
    title: "Serene Retreat by the Lake",
    price: "$ 1,970",
    description: "1964 Jehovah Drive, VA 22408",
    image: "/images/section-four/rectangle-2.svg",
    type: "rent",
    badge: { text: "Home", color: "bg-customLightBlue", icon: "icon-home" },
    specs: { beds: 4, baths: 3 },
  },
  {
    id: 3,
    title: "Charming Cottage in the Meadow",
    price: "$ 3,450",
    description: "1508 Centennial Farm RoadHarlan, 51537",
    image: "/images/section-four/rectangle-3.svg",
    type: "rent",
    badge: {
      text: "Discounted Price",
      color: "bg-customLightGreen",
      icon: "icon-finance",
    },
    specs: { beds: 5, baths: 4 },
  },
  {
    id: 4,
    title: "Grand Estate on the Hilltop",
    price: "$ 2,389",
    description: "103 Wright CourtBurien, WA 98168",
    image: "/images/section-four/rectangle-4.svg",
    type: "sell",
    badge: { text: "Popular", color: "bg-customPink", icon: "icon-fire" },
    specs: { beds: 2, baths: 2 },
  },
];

const SectionFour = () => {
  const [activeType, setActiveType] = useState<PropertyType>("all");

  const filteredProperties = properties.filter((property) =>
    activeType === "all" ? true : property.type === activeType
  );

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: "unslick",
      },
    ],
  };

  return (
    <div className="container mx-auto px-8 py-16">
      <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
        <div>
          <h3 className="text-customPurple font-semibold text-base lg:text-base">
            CHECKOUT OUR NEW
          </h3>
          <h2 className="text-[32px] lg:text-[39.8px] text-black font-semibold mt-4">
            Latest Listed Properties
          </h2>
          <p className="text-sm lg:text-base font-normal text-gray-600 mt-4 max-w-[600px]">
            Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
            dignissim purus.
          </p>
        </div>

        <div className="flex gap-4 mt-8 lg:mt-0">
          {["all", "sell", "rent"].map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type as PropertyType)}
              className={`w-[80px] h-[49px] rounded-full border border-customPurple transition-all
                ${
                  activeType === type
                    ? "bg-customPurple text-white"
                    : "bg-white text-customPurple"
                }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <div className="hidden lg:block">
          <Slider {...sliderSettings}>
            {filteredProperties.map((property) => (
              <div key={property.id} className="px-3">
                <div className="flex flex-col gap-4">
                  <div className="relative w-[340px] h-[340px]">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      className="object-cover rounded-[30px]"
                    />
                    {property.badge && (
                      <div
                        className={`absolute bottom-4 left-4 ${property.badge.color} rounded-full h-[42px] w-[180px] gap-1 flex items-center justify-center`}
                      >
                        <Image
                          src={`/icons/section-four/${property.badge.icon}.svg`}
                          alt={property.badge.text}
                          width={16}
                          height={16}
                          className="w-4 h-4"
                        />
                        <span
                          className={`badge-text-${
                            property.badge.text === "Popular"
                              ? "popular"
                              : property.badge.text === "Home"
                              ? "home"
                              : "discount"
                          }`}
                        >
                          {property.badge.text}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6 bg-white rounded-[30px]">
                    <p className="text-customPurple font-semibold text-2xl">
                      {property.price}
                    </p>
                    <h3 className="font-semibold text-lg mt-3 text-black">
                      {property.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2">
                      {property.description}
                    </p>
                    <div className="flex gap-4 mt-4">
                      <div className="flex items-center gap-2">
                        <Image
                          src="/icons/section-four/icon-bed.svg"
                          alt="bed"
                          width={16}
                          height={16}
                          className="w-4 h-4"
                        />
                        <span className="text-gray-600">
                          {property.specs.beds} Beds
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Image
                          src="/icons/section-four/icon-bathroom.svg"
                          alt="bathroom"
                          width={16}
                          height={16}
                          className="w-4 h-4"
                        />
                        <span className="text-gray-600">
                          {property.specs.baths} Bath
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="lg:hidden flex flex-col gap-6">
          {filteredProperties.map((property) => (
            <div key={property.id}>
              <div className="flex flex-col gap-4">
                <div className="relative w-full h-[220px]">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover rounded-[30px]"
                  />
                  {property.badge && (
                    <div
                      className={`absolute bottom-4 left-4 ${property.badge.color} rounded-full h-[42px] w-[180px] flex items-center justify-center`}
                    >
                      <Image
                        src={`/icons/section-four/${property.badge.icon}.svg`}
                        alt={property.badge.text}
                        width={16}
                        height={16}
                        className="w-4 h-4"
                      />
                      <span
                        className={`badge-text-${
                          property.badge.text === "Popular"
                            ? "popular"
                            : property.badge.text === "Home"
                            ? "home"
                            : "discount"
                        } text-sm`}
                      >
                        {property.badge.text}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-4 bg-white rounded-[30px]">
                  <p className="text-customPurple font-semibold text-xl lg:text-2xl">
                    {property.price}
                  </p>
                  <h3 className="font-semibold text-base lg:text-lg mt-2 text-black">
                    {property.title}
                  </h3>
                  <p className="text-gray-600 text-xs lg:text-sm mt-2">
                    {property.description}
                  </p>
                  <div className="flex gap-4 mt-3">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/icons/section-four/icon-bed.svg"
                        alt="bed"
                        width={16}
                        height={16}
                        className="w-4 h-4"
                      />
                      <span className="text-gray-600 text-xs lg:text-sm">
                        {property.specs.beds} Beds
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Image
                        src="/icons/section-four/icon-bathroom.svg"
                        alt="bathroom"
                        width={16}
                        height={16}
                        className="w-4 h-4"
                      />
                      <span className="text-gray-600 text-xs lg:text-sm">
                        {property.specs.baths} Bath
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 lg:hidden flex justify-center">
          <button className="w-full max-w-[333px] h-[50px] rounded-full border border-[rgba(58,12,163,1)] text-customPurple font-medium">
            View more properties
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
