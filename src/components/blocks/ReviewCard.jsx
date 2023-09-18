import React from 'react';
import styles from '../../styles/blocks/ReviewCard.module.css'

const ReviewCard = ({store}) => {
    return (
        <div className={styles.review_container}>
            <div className={styles.user_wrap}>
                <img src="/image/my.png" alt="my"/>
                <p>발랄한 맛사냥꾼</p>
            </div>
            <div className={styles.store_info_wrap}>
                <div className={styles.star_box}>
                    <img src="/image/star.png" alt="star"/>
                    <p>4.3</p>
                </div>
                <p>2023.09.04</p>
            </div>
            <div className={styles.review_wrap}>
                <div className={styles.review_img}>
                    <img src="/image/menu_1 2.png" alt="menu_1"/>
                    <img src="/image/menu_1 2.png" alt="menu_1"/>
                </div>
                <p>리뷰우우우우우우zzzzzzzfddddddddddddddddddddddddzzzzzzzzzzzzzzzzzzzzzzzzㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ</p>
            </div>
        </div>
    );
};

export default ReviewCard;