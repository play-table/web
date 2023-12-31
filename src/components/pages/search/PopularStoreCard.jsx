import React from 'react';
import styles from '../../../styles/pages/search/PopularStoreCard.module.css';
import StarBox from '../../atoms/StarBox';
import { RiUser3Fill } from 'react-icons/ri';
import {Category} from "../../../common/Category";
import {useNavigate} from "react-router-dom";

const PopularStoreCard = ({ index, store }) => {
    const nav = useNavigate();
    const onClickHandler = () => nav(`/store/${store.store.id}`)
  return (
    <div className={styles.card_container} onClick={onClickHandler}>
      <h5>{index + 1}</h5>
      <div className={styles.store_image_wrap}>
        <img src={store.store.imageUrl} />
      </div>
      <div className={styles.description_container}>
        <div className={styles.summary_wrap}>
          <h6>{Category[store.store.category]}</h6> - <h6>{store.store.address}</h6>
        </div>
        <h4>{store.store.name}</h4>
        <div className={styles.waiting_wrap}>
          <RiUser3Fill />
          {`오늘 웨이팅 ${store.todayWaitingCount}`}
        </div>
        <div className={styles.review_wrap}>
          <StarBox />
          <h6>{`리뷰 ${store.store.reviewCount}개`}</h6>
        </div>
      </div>
    </div>
  );
};

export default PopularStoreCard;
