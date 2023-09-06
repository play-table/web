import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import '../../../styles/pages/home/SwiperStyles.css';
import styles from '../../../styles/pages/home/Slide.module.css';
import StoreCard from './StoreCard';

const StoreSlide = ({ stores }) => {
  return (
    <div className={styles.store_slide}>
      <Swiper slidesPerView={2} spaceBetween={10} className="mySwiper">
        {stores.map((value, index) => (
          <SwiperSlide key={index}>
            <StoreCard store={value} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default StoreSlide;
