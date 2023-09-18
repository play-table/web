import React from 'react';
import styles from '../../../styles/pages/search/PopularStoreCard.module.css';
import StarBox from '../../atoms/StarBox';
import {Category} from "../../../common/Category";
import {useNavigate} from "react-router-dom";

const SearchStoreCard = ({ index, store }) => {
    const nav = useNavigate();
    const onClickHandler = () => nav(`/store/${store.id}`)
  return (
    <div className={styles.card_container} onClick={onClickHandler}>
      <h5>{index + 1}</h5>
      <div className={styles.store_image_wrap}>
        <img src={store.imageUrl} />
      </div>
      <div className={styles.description_container}>
        <div className={styles.summary_wrap}>
          <h6>{Category[store.category]}</h6> - <h6>{store.address}</h6>
        </div>
        <h4>{store.name}</h4>
        <div className={styles.review_wrap}>
          <StarBox />
          <h6>{`리뷰 ${store.reviewCount}개`}</h6>
        </div>
      </div>
    </div>
  );
};

export default SearchStoreCard;
