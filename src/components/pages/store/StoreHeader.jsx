import React from 'react';
import styles from '../../../styles/pages/store/StoreHeader.module.css';

const StoreHeader = () => {
    return (
        <div className={styles.header}>
            <img src="/image/store-store-21.png" alt="store"/>
                <div className={styles.header_fixed}>
                    <img src="/image/back.svg" alt="back"/>
                    <img src="/image/home.svg" alt="home"/>
                </div>
        </div>
    );
};

export default StoreHeader;