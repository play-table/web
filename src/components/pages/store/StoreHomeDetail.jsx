import React from 'react';
import styles from '../../../styles/pages/store/StoreHomeDetail.module.css';

const StoreHomeDetail = () => {
    return (
        <div className={styles.home_detail}>
            <div className={styles.home_time}>
                <p>영업시간</p>
                <div>9:00 ~ 18:00</div>
                <div>브레이크 타임 14:30 ~ 16:10</div>
                <div>매주 수요일 정규 휴무</div>
            </div>
            <div className={styles.home_time}>
                <p>전화번호</p>
                <div>064-746-2222</div>
            </div>
        </div>
    );
};

export default StoreHomeDetail;