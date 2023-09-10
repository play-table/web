import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode } from 'swiper/modules';


export default function Slide(props) {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={15}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode]}
                className="mySwiper"
            >
                {props.data.map((item, idx) => (
                    <SwiperSlide>{item.el}</SwiperSlide>
                ))}

            </Swiper>
        </>
    );
}