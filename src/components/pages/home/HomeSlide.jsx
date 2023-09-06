import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../../styles/pages/home/SwiperStyles.css';
import styles from '../../../styles/pages/home/Slide.module.css';
import { Navigation, Pagination } from 'swiper/modules';

const HomeSlide = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch('data/homeSlideData.json')
      .then((res) => res.json())
      .then((data) => setSlides(data));
  }, []);
  return (
    <div className={styles.main_slide}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((value, index) => (
          <SwiperSlide key={index}>
            <img src={value.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlide;
