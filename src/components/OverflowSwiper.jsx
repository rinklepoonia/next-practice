"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Image from "next/image";


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { OVERFLOW_SWIPER_DATA_LIST } from '@/utils/helper';

export default function App() {
  return (
    <>
      <div className='py-[500px] bg-white'>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {OVERFLOW_SWIPER_DATA_LIST.map((obj, i) => (
            <div key={i}>
              <SwiperSlide>
                <Image
                  src={obj.image}
                  alt="logo"
                  height={500}
                  width={800}
                  className=""
                /></SwiperSlide>
            </div>
          ))}

        </Swiper>
      </div>
    </>
  );
}
