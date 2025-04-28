"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { TRUST_LIST } from '@/utils/helper';
import Image from 'next/image';

const ContinueSwiper = () => {
  return (
      <div className="max-w-[1180px] px-5 mx-auto container lg:pt-[54px] md:pt-[168px] sm:pt-[132px] pt-[50px] pb-[162px]">
          <h2 className='max-lg:text-center text-2xl sm:text-3xl md:text-custom-4xl text-prussian-blue !leading-110 font-normal max-w-[548px] mb-6 sm:mb-10 md:mb-12 lg:mb-16 capitalize max-lg:mx-auto'>More than <span className='text-sky-blue font-bold'>80,000</span>+ companies trust bill central </h2>
          <Swiper className='linear-slider'
              modules={[Autoplay]}
              slidesPerView={3}
              spaceBetween={20}
              loop={true}
              autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
              }}
              speed={3000}
              allowTouchMove={false}
              breakpoints={
                  {
                      1024: {
                          slidesPerView: 7,
                      },
                      768: {
                          slidesPerView: 5,
                      },
                      480: {
                          slidesPerView: 4
                      },
                      350: {
                          slidesPerView: 3,
                          spaceBetween: 10
                      }
                  }
              }
          >
              {TRUST_LIST.map((item, i) => (
                  <SwiperSlide key={i}>
                      <div className='max-w-[127.28px] flex justify-center'>
                          <Image
                              src={item.img}
                              alt="logos"
                              width={127.28}
                              height={62.12}
                              className={`${i === 6 || i === 13 ? "w-[63.33px]" : "w-[127.28px]"} h-[62.12px] cursor-pointer object-contain`}
                          />
                      </div>
                  </SwiperSlide>
              ))}
          </Swiper>
      </div>
  )
}

export default ContinueSwiper