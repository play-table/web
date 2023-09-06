import React from 'react';
import styles from '../../../styles/pages/store/StoreMenuDetail.module.css';
const StoreMenuDetail = () => {
    return (
        <div className={styles.menu_detail}>
            <div className={styles.menu_wrap}>
                <p>고기국수</p>
                <p>9,000원</p>
            </div>
            <div className={styles.menu_wrap}>
                <p>비빔국수</p>
                <p>9,000원</p>
            </div>
            <div className={styles.menu_wrap}>
                <p>물만두</p>
                <p>9,000원</p>
            </div>
            <div className={styles.menu_wrap}>
                <p>돔배고기 (소/대)</p>
                <p>18,000원~34,000원</p>
            </div>
        </div>
    );
};

export default StoreMenuDetail;