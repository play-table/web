import React from 'react';
import styles from '../../../styles/pages/store/StoreTapBtn.module.css';
import StoreHomeDetail from "./StoreHomeDetail";
const StoreTapBtn = ({onCLickHandler}) => {

    return (
        <div className={styles.tap_btn_wrap}>
            <button value={"StoreHomeDetail"} onClick={onCLickHandler}>홈</button>
            <button value={"StoreMenuDetail"} onClick={onCLickHandler}>메뉴</button>
            <button value={"ReviewCard"} onClick={onCLickHandler}>리뷰</button>
        </div>
    );
};

export default StoreTapBtn;