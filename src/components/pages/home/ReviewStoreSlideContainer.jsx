import React, { useEffect, useState } from 'react';
import styles from '../../../styles/pages/home/Home.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import StoreCard from './StoreCard';
import UserBox from './UserBox';

const ReviewStoreSlideContainer = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('data/storeReviewCardData.json')
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <h3 className={styles.slide_title}>Waiting Top 10</h3>
      <div className={styles.review_slide_container}>
        <Swiper slidesPerView={2} spaceBetween={10} className="mySwiper">
          {reviews.map((value, index) => (
            <SwiperSlide key={index}>
              <div className={styles.review_box}>
                <UserBox user={value.user} />
                <StoreCard store={value.store} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewStoreSlideContainer;
