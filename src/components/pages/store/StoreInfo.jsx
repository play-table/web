import React from 'react';
import styles from '../../../styles/pages/store/Storeinfo.module.css';

const StoreInfo = () => {
    return (
        <div className={styles.store_info}>
            <p>일식·경주</p>
            <span>자매국수</span>
            <div className={styles.star_box}>
                <img src="/image/star.png" alt="star"/>
                <p>4.3</p>
                <span>리뷰 1,120개</span>
            </div>
        </div>
    );
};

export default StoreInfo;