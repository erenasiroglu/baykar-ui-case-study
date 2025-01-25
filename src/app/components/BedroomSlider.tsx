import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BedroomSlider = () => {
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        className="relative"
      >
        <SwiperSlide>
          <div className="relative">
            <Image
              src="/images/bedroom.svg"
              alt="Modern Yatak Odası Görünümü 1"
              width={540}
              height={340}
              className="rounded-lg w-full h-[210px] lg:h-[340px] object-cover"
            />
            <Image
              src="/icons/rectangle-2.svg"
              alt="Decoration"
              width={61}
              height={61}
              className="absolute top-0 right-0"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Image
              src="/images/bedroom.svg"
              alt="Modern Yatak Odası Görünümü 2"
              width={540}
              height={340}
              className="rounded-lg"
            />
            <Image
              src="/icons/rectangle-2.svg"
              alt="Decoration"
              width={61}
              height={61}
              className="absolute top-0 right-0"
            />
          </div>
        </SwiperSlide>

        <div className="swiper-button-prev !w-10 !h-10 !bg-white !rounded-full !shadow-md after:!text-customPurple after:!text-lg"></div>
        <div className="swiper-button-next !w-10 !h-10 !bg-white !rounded-full !shadow-md after:!text-customPurple after:!text-lg"></div>
      </Swiper>
    </div>
  );
};

export default BedroomSlider;
