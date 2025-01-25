"use client";
import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const blogPosts = [
  {
    id: 1,
    image: "/images/section-five/rectangle-1.svg",
    title: "Top 10 Home Buying Mistakes to Avoid",
    description:
      "Etiam eget elementum elit. Aenean dignissim dapibus vestibulum",
  },
  {
    id: 2,
    image: "/images/section-five/rectangle-2.svg",
    title: "How to Stage Your Home for a Quick Sale",
    description:
      "Nullam odio lacus, dictum quis pretium congue, vehicula venenatis nunc.",
  },
  {
    id: 3,
    image: "/images/section-five/rectangle-3.svg",
    title: "5 Tips for First-Time Home Sellers",
    description:
      "In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus.",
  },
];

const SectionFive = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const CustomArrow = ({
    direction,
    onClick,
  }: {
    direction: "left" | "right";
    onClick?: () => void;
  }) => (
    <button
      onClick={onClick}
      className="w-12 h-12 bg-white rounded-full border border-white flex items-center justify-center"
    >
      <Image
        src={`/icons/arrow-${direction}.svg`}
        alt={`Arrow ${direction}`}
        width={24}
        height={24}
      />
    </button>
  );

  return (
    <div className="bg-customPurple py-16">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <p className="text-white text-[19.4px] font-medium">
            WHAT'S TRENDING
          </p>
          <h2 className="text-white text-[39.8px] font-semibold mt-4">
            Latest Blogs & Posts
          </h2>
        </div>

        <div className="relative">
          <Slider {...sliderSettings}>
            {blogPosts.map((post) => (
              <div key={post.id} className="px-4">
                <div className="flex flex-col gap-4">
                  <div className="relative w-[340px] h-[240px]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover rounded-[20px]"
                    />
                  </div>
                  <div className="text-white">
                    <h3 className="font-semibold text-xl mb-2">{post.title}</h3>
                    <p className="text-white/80">{post.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          <div className="flex justify-center items-center gap-8 mt-12">
            <CustomArrow
              direction="left"
              onClick={() =>
                sliderSettings.beforeChange(currentSlide, currentSlide - 1)
              }
            />
            <div className="flex gap-4">
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  className={`h-[3px] w-12 rounded-full transition-all ${
                    currentSlide === index ? "bg-white" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
            <CustomArrow
              direction="right"
              onClick={() =>
                sliderSettings.beforeChange(currentSlide, currentSlide + 1)
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
