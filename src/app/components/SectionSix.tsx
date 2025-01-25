"use client";
import React, { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    image: "/images/section-six/testimonails.svg",
  },
  {
    id: 2,
    image: "/images/section-six/testimonails.svg",
  },
  {
    id: 3,
    image: "/images/section-six/testimonails.svg",
  },
];

const SectionSix = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between">
          <div className="max-w-[600px]">
            <p className="text-customPurple font-medium text-[19.4px]">
              TESTIMONIALS
            </p>
            <h2 className="text-[39.8px] text-black font-semibold mt-4">
              Look What Our Customers Say!
            </h2>
            <p className="text-base font-normal text-gray-600 mt-4">
              Fusce venenatis tellus a felis scelerisque, non pulvinar est
              pellentesque.
            </p>
            <div className="flex gap-8 mt-12">
              <button
                onClick={handlePrevious}
                className="w-12 h-12 rounded-full border border-customPurple flex items-center justify-center hover:bg-customPurple/10 transition-colors"
              >
                <Image
                  src="/icons/arrow-left.svg"
                  alt="Arrow Left"
                  width={24}
                  height={24}
                />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full border border-customPurple flex items-center justify-center hover:bg-customPurple/10 transition-colors"
              >
                <Image
                  src="/icons/arrow-right.svg"
                  alt="Arrow Right"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <Image
              src={testimonials[currentIndex].image}
              alt="Testimonial"
              width={560}
              height={419}
            />
            <div className="flex flex-col gap-4">
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  className={`w-[3px] h-[37px] rounded-full transition-all ${
                    currentIndex === index
                      ? "bg-customPurple"
                      : "bg-customPurple/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
