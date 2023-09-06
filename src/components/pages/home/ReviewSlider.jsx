import React, { useEffect, useState } from 'react';
import styles from '../../../styles/pages/home/Slide.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

const ReviewSlider = ({ stores }) => {
  const [slides, setSlides] = useState([]);
  useEffect(() => {
    fetch('data/storeReviewCardData.json')
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
        {stores.map((value, index) => (
          <SwiperSlide key={index}>
            <img src={value.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewSlider;
