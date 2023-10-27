"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
//implementing Autoplay
import {
  Autoplay,
  //   Pagination,
  //   Scrollbar,
  //   Navigation,
  //   A11y,
} from "swiper/modules";

const Govern = () => {
  return (
    <div>
      <img src="assets/images/img1.jpg" alt="" />
    </div>
  );
};

export default function slider() {
  return (
    <Swiper
      //   modules={[Autoplay, Pagination, Scrollbar, Navigation, A11y]}
      modules={[Autoplay]}
      spaceBetween={10}
      //   navigation
      //   pagination={{ clickable: true }}
      //   scrollbar={{ draggable: true }}
      slidesPerView={1}
      setWrapperSize={50}
      height={50}
      autoplay={{
        delay: 2000,
      }}

      //   onSlideChange={() => console.log("slide change")}
      //   onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img className="resize" src="graphics/01.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="resize" src="graphics/02.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="resize" src="graphics/001.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="graphics/001.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="graphics/003.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="graphics/004.jpeg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="graphics/005.jpeg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="graphics/006.gif" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="graphics/tm001.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="graphics/tm002.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="graphics/tm003.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="graphics/logof.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="graphics/logo2.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="graphics/05.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="graphics/06.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="graphics/07.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="graphics/08.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="graphics/09.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="graphics/010.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="graphics/011.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="graphics/012.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="graphics/utub.png" alt="" />
      </SwiperSlide>
      ...
    </Swiper>
  );
}
