"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/images/pic1.png", alt: "Banner 1" },
  { src: "/images/pic2.png", alt: "Banner 2" },
  { src: "/images/pic3.png", alt: "Banner 3" },
  { src: "/images/pic4.png", alt: "Banner 4" },
  { src: "/images/pic5.png", alt: "Banner 5" },
  { src: "/images/pic6.png", alt: "Banner 6" },
  { src: "/images/pic7.png", alt: "Banner 7" },
];

export function ImageSlider() {
  return (
    <div className="overflow-hidden w-full">
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={0}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {images.map(({ src, alt }, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-[250px]">
              {" "}
              {/* Hoặc 200px tuỳ độ cao ảnh bạn muốn */}
              <Image
                src={src}
                alt={alt}
                fill
                className="object-fill"
                priority
              />
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev absolute top-[50%] left-4 text-3xl text-white z-10 cursor-pointer">
          <ChevronLeft />
        </div>
        <div className="swiper-button-next absolute top-[50%] right-4 text-3xl text-white z-10 cursor-pointer">
          <ChevronRight />
        </div>
      </Swiper>
    </div>
  );
}
