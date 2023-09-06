import React from 'react';
import styles from '../../../styles/pages/store/StoreMainBtn.module.css';
const StoreMainBtn = () => {
    return (
        <div className={styles.main_btn_wrap}>
            <button>Reservation</button>
            <button>Waiting</button>
        </div>
    );
};

export default StoreMainBtn;