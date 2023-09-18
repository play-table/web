import React, {useEffect, useState} from 'react';
import styles from '../../../styles/pages/home/Home.module.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import StoreCard from './StoreCard';
import {api} from "../../../common/api/ApiClient";

const ReviewStoreSlideContainer = () => {
    const [stores, setStores] = useState([]);

    const getStore = async () => {
        try {
            const data = await api("/api/v1/store/waiting-top", "GET", {})
            setStores(data);
        } catch (error){
            alert('fail')
        }
    }
    useEffect(() => {
        getStore();
    }, []);
  return (
    <div>
      <h3 className={styles.slide_title}>유저의 리얼리뷰 Top 10</h3>
      <div className={styles.review_slide_container}>
        <Swiper slidesPerView={2} spaceBetween={10} className="mySwiper">
          {stores.map((value, index) => (
            <SwiperSlide key={index}>
              <div className={styles.review_box}>
                <StoreCard store={value} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewStoreSlideContainer;
