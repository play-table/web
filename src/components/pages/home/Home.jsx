import React from 'react';
import HomeSlide from './HomeSlide';
import HomeHeader from './HomeHeader';
import styles from '../../../styles/pages/home/Home.module.css';
import ServiceButton from './ServiceButton';
import TopStoreSlideContainer from './TopStoreSlideContainer';
import ReviewStoreSlideContainer from './ReviewStoreSlideContainer';

const Home = () => {
  return (
    <div className={styles.home_container}>
      <HomeHeader />
      <HomeSlide />
      <div className={styles.button_container}>
        <ServiceButton
          content="Resevation"
          redirect="/reservation/:storeId"
        />
        <ServiceButton
          content="Online Waitng"
          redirect="/search?category=wating"
        />
      </div>
      <TopStoreSlideContainer />
      <ReviewStoreSlideContainer />
    </div>
  );
};

export default Home;
