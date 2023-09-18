import React from 'react';
import styles from '../../../styles/pages/store/StoreHomeDetail.module.css';
import {DayOfWeek} from "../../../common/DayOfWeek";

const StoreHomeDetail = ({store}) => {
    const makeRestDays = (restDays = []) => {
        let days = '';
        restDays.forEach(day=>days += `${DayOfWeek[day.day]} ` );
        return days;
    }
    return (
        <div className={styles.home_detail}>
            <div className={styles.home_time}>
                <p>영업시간</p>
                <div>{`${store.openTime?.substring(0, 5)} ~ ${store.closeTime?.substring(0, 5)}`}</div>
                <div>{`브레이크 타임 ${store.breakStartTime?.substring(0, 5)} ~ ${store.breakEndTime?.substring(0, 5)}`}</div>
                <div>{`매주 ${makeRestDays(store.restDays)}정규 휴무`}</div>
            </div>
            <div className={styles.home_time}>
                <p>전화번호</p>
                <div>{store.contact}</div>
            </div>
        </div>
    );
};

export default StoreHomeDetail;