import React from 'react';
import styles from '../../styles/atoms/StarBox.module.css'
const StarBox = () => {
    return (
        <div className={styles.star_box}>
            <img src="/image/star.png" alt="star"/>
            <p>4.3</p>
        </div>
    );
};

export default StarBox;