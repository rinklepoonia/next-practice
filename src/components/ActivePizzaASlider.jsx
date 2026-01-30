"use client";
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import required modules
import { Navigation, FreeMode } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

const testimonials = [
    {
        image: '/assets/images/png/slider1.jpg',
        name: 'Ritesh Malik',
        role: 'Software Engineer',
        text: 'Veggie Fiesta hit all the right spots...',
    },
    {
        image: '/assets/images/png/slider1.jpg',
        name: 'Ritesh Malik2',
        role: 'Software Engineer',
        text: 'Veggie Fiesta hit all the right spots...',
    },
    {
        image: '/assets/images/png/slider1.jpg',
        name: 'Ritesh Malik3',
        role: 'Software Engineer',
        text: 'Veggie Fiesta hit all the right spots...',
    },
    {
        image: '/assets/images/png/slider1.jpg',
        name: 'Ritesh Malik4',
        role: 'Software Engineer',
        text: 'Veggie Fiesta hit all the right spots...',
    },
    {
        image: '/assets/images/png/slider1.jpg',
        name: 'Ritesh Malik5',
        role: 'Software Engineer',
        text: 'Veggie Fiesta hit all the right spots...',
    },
    {
        image: '/assets/images/png/slider1.jpg',
        name: 'Ritesh Malik6',
        role: 'Software Engineer',
        text: 'Veggie Fiesta hit all the right spots...',
    },
    {
        image: '/assets/images/png/slider1.jpg',
        name: 'Ritesh Malik7',
        role: 'Software Engineer',
        text: 'Veggie Fiesta hit all the right spots...',
    },
    // Add at least 7 items for proper display
];

const ActivePizzaASlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className='max-w-[1440px] px-5 mx-auto'>
            <div className="relative px-10"> {/* Added padding for navigation buttons */}
                <Swiper
                    modules={[Navigation, FreeMode]}
                    slidesPerView={7}
                    centeredSlides={true}

                    // initialSlide={3} 
                    loop={true} // Enable infinite loop
                    freeMode={true}
                    slideToClickedSlide={true} // Enable click to slide
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    navigation={true} // Enable navigation
                    breakpoints={{
                        // Responsive breakpoints
                        320: { slidesPerView: 3 },
                        640: { slidesPerView: 5 },
                        1024: { slidesPerView: 7 },
                    }}
                    className="testimonial-swiper"
                >
                    {testimonials.map((item, idx) => (
                        <SwiperSlide key={idx}>
                            <div className={`
                            transition-all duration-300 cursor-pointer
                            ${idx === activeIndex
                                    ? 'scale-125 opacity-100 z-10'
                                    : 'scale-75 opacity-50'
                                }
                        `}>
                                <img
                                    src={item.image}
                                    className="rounded-full w-16 h-16 object-cover mx-auto"
                                    alt={item.name}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div
                    className="mt-8 text-center transition-all duration-300"
                    key={activeIndex} // Force remount for animation
                >
                    <h3 className="text-xl font-bold">{testimonials[activeIndex].name}</h3>
                    <p className="text-gray-600">{testimonials[activeIndex].role}</p>
                    <p className="mt-4">{testimonials[activeIndex].text}</p>
                </div>
            </div>
        </div>
    );
};

export default ActivePizzaASlider;