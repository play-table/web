import React from 'react';
import styles from '../../../styles/pages/store/StoreHeader.module.css';

const StoreHeader = () => {
    return (
        <div className={styles.header}>
            <img src="/image/store-store-21.png" alt="store"/>
                <div className={styles.header_fixed}>
                    <button><img src="/image/back.svg" alt="back"/></button>
                    <button><img src="/image/home.svg" alt="home"/></button>
                </div>
        </div>
    );
};

export default StoreHeader;