import React from 'react';
import styles from '../../../styles/pages/owner/Owner.module.css';
import {useNavigate} from "react-router-dom";
const Owner = () => {
    const nav = useNavigate();
    return (
        <div className={styles.owner_container}>
            <img src="/image/logo.png" alt="logo"/>
            <span>점주 서비스</span>
            <div className={styles.owner_btn_wrap}>
                <button onClick={e=>nav('/inputStore')}>가게등록</button>
                <button>메뉴등록</button>
                <button>예약확인</button>
                <button>줄서기 확인</button>
            </div>
        </div>
    );
};

export default Owner;