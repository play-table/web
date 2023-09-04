import React from 'react';
import styles from '../../styles/blocks/MiniStoreInfo.module.css'

const MiniStoreInfo = () => {
    return (
        <div className={styles.header_container}>
            <div className={styles.header_wrap}>
                <img src="/image/header_store.png" alt="header_store"/>
                    <div className={styles.store_info}>
                        <p>무탄</p>
                        <span>일식·경주</span>
                    </div>
            </div>
            <img src="/image/arrow.png" alt="arrow"/>
        </div>
    );
};

export default MiniStoreInfo;