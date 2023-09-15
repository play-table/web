import React, { useEffect, useState } from 'react';
import styles from '../../../styles/pages/home/Home.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import StoreCard from './StoreCard';
import 'swiper/css';
import 'swiper/css/pagination';

import '../../../styles/pages/home/SwiperStyles.css';
import {api} from "../../../common/api/ApiClient";

const TopStoreSlideContainer = () => {
  const [stores, setStores] = useState([]);

  const getStore = async () => {
      try {
          const data = await api("/api/v1/store/waiting-top", "GET", {})
          console.log(data);
      } catch (error){
            alert('dadsada')
      }
  }
  useEffect(() => {
      getStore();
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
