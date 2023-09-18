import React from 'react';
import styles from '../../../styles/pages/home/StoreCard.module.css';
import StarBox from '../../atoms/StarBox';
import {Category} from "../../../common/Category";
import {useNavigate} from "react-router-dom";

const StoreCard = ({ store }) => {

    const nav = useNavigate();
    const onClickHandler = () => nav(`/store/${store.store.id}`)
    return (
    <div onClick={onClickHandler}>
      <img src={store.store.imageUrl} />
      <div className={styles.name_container}>
        <h6>{store.store.name}</h6>
      </div>
      <div className={styles.description_container}>
        <StarBox />
        <h6>{Category[store.store.category]}</h6> - <h6>{store.store.address}</h6>
      </div>
    </div>
  );
};

export default StoreCard;
