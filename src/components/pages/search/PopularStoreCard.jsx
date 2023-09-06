import React from 'react';
import styles from '../../../styles/pages/search/PopularStoreCard.module.css';
import StarBox from '../../atoms/StarBox';
import { RiUser3Fill } from 'react-icons/ri';

const PopularStoreCard = ({ index, store }) => {
  return (
    <div className={styles.card_container}>
      <h5>{index + 1}</h5>
      <div className={styles.store_image_wrap}>
        <img src={store.image} />
      </div>
      <div className={styles.description_container}>
        <div className={styles.summary_wrap}>
          <h6>{store.category}</h6> - <h6>{store.location}</h6>
        </div>
        <h4>{store.name}</h4>
        <div className={styles.waiting_wrap}>
          <RiUser3Fill />
          {`일 평균 웨이팅 ${store.averageReservationCount}`}
        </div>
        <div className={styles.review_wrap}>
          <StarBox />
          <h6>{`리뷰 ${store.reviewCount}개`}</h6>
        </div>
      </div>
    </div>
  );
};

export default PopularStoreCard;
