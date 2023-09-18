import React from 'react';
import styles from '../../../styles/pages/store/Storeinfo.module.css';
import {Category} from "../../../common/Category";

const StoreInfo = ({store}) => {
    return (
        <div className={styles.store_info}>
            <p>{`${Category[store.category]}·${store.address}`}</p>
            <span>{store.name}</span>
            <div className={styles.star_box}>
                <img src="/image/star.png" alt="star"/>
                <p>{store.totalRating }</p>
                <span>{`${store.reviewCount} 개`}</span>
            </div>
        </div>
    );
};

export default StoreInfo;