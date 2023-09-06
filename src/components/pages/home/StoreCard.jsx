import React from 'react';
import styles from '../../../styles/pages/home/StoreCard.module.css';
import StarBox from '../../atoms/StarBox';

const StoreCard = ({ store }) => {
  return (
    <div>
      <img src={store.image} />
      <div className={styles.name_container}>
        <h6>{store.name}</h6>
      </div>
      <div className={styles.description_container}>
        <StarBox />
        <h6>{store.category}</h6> - <h6>{store.location}</h6>
      </div>
    </div>
  );
};

export default StoreCard;
