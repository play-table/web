import React from 'react';
import styles from '../../../styles/pages/store/StoreMenuDetail.module.css';
const StoreMenuDetail = ({store}) => {
    return (
        <div className={styles.menu_detail}>
            {store.menus?.map((value, index)=>(
                <div className={styles.menu_wrap} key={index}>
                    <p>{value.name}</p>
                    <p>{`${value.price}원`}</p>
                </div>
            ))}

        </div>
    );
};

export default StoreMenuDetail;