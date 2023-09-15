import React from 'react';
import styles from '../../../styles/pages/owner/Owner.module.css';
const Owner = () => {
    return (
        <div className={styles.owner_container}>
            <img src="/image/logo.png" alt="logo"/>
            <span>점주 서비스</span>
            <div className={styles.owner_btn_wrap}>
                <button>가게등록</button>
                <button>메뉴등록</button>
                <button>예약확인</button>
                <button>줄서기 확인</button>
            </div>
        </div>
    );
};

export default Owner;