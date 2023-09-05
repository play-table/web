import React, { useEffect, useState } from 'react';
import styles from '../../../styles/pages/home/Home.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import StoreCard from './StoreCard';
import 'swiper/css';
import 'swiper/css/pagination';

import '../../../styles/pages/home/SwiperStyles.css';

const TopStoreSlideContainer = () => {
  const [stores, setStores] = useState([]);
  useEffect(() => {
    fetch('data/storeCardData.json')
      .then((res) => res.json())
      .then((data) => setStores(data));
  }, []);

  return (
    <div>
      <h3 className={styles.slide_title}>Waiting Top 10</h3>
      <div className={styles.store_slide}>
        <Swiper slidesPerView={2} spaceBetween={10} className="mySwiper">
          {stores.map((value, index) => (
            <SwiperSlide key={index}>
              <StoreCard store={value} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopStoreSlideContainer;
