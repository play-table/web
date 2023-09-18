import React from 'react';
import styles from '../../../styles/pages/store/StoreMainBtn.module.css';
const StoreMainBtn = ({store}) => {
    return (
        <div className={styles.main_btn_wrap}>
            <button disabled>Reservation</button>
            <button disabled>Waiting</button>
        </div>
    );
};

export default StoreMainBtn;