"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import {
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";

export function LogoSlider() {
  // Daftar ikon
  const baseIcons = [
    SiJavascript,
    SiTypescript,
    SiExpress,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiMysql,
    SiPostgresql,
    SiMongodb,
  ];
  // Gandakan konten 2x untuk jalur panjang (tanpa loop Swiper, agar tidak ada snap)
  const icons = [...baseIcons, ...baseIcons];

  return (
    <div className="relative w-[960px] h-[120px] overflow-hidden mx-auto shadow-[0_10px_20px_-5px_rgba(0,0,0,0.15)]">
      {/* Fade gradient kiri */}
      <div className="absolute left-0 top-0 z-10 h-full w-[200px] bg-gradient-to-r from-white to-transparent dark:from-gray-900 pointer-events-none" />
      {/* Fade gradient kanan */}
      <div className="absolute right-0 top-0 z-10 h-full w-[200px] bg-gradient-to-l from-white to-transparent dark:from-gray-900 pointer-events-none" />

      <Swiper
        modules={[Autoplay, FreeMode]}
        slidesPerView={"auto"}
        spaceBetween={0}
        loop={false}
        speed={12000}
        freeMode={{ enabled: true, momentum: false }}
        autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
        allowTouchMove={false}
        grabCursor={false}
        className="mySwiper h-[120px]"
      >
        {icons.map((Icon, i) => (
          <SwiperSlide key={i} className="!w-[150px] flex items-center justify-center">
            <div className="h-[120px] w-[150px] flex items-center justify-center text-6xl text-gray-700 dark:text-gray-200">
              <Icon />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
