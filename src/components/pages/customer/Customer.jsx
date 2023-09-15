import React from 'react';
import BigOrangeButton from "../../atoms/BigOrangeButton";
import styles from '../../../styles/pages/customer/Customer.module.css';

const Customer = () => {
    return (
        <div className="customer_container">
            <span>←</span>
            <div className={styles.customer_wrap}>
                <span>내 정보 입력</span>
                <div className={styles.insert_wrap}>
                    <div className={styles.insert_box}>
                        <span>이름</span>
                        <input type="text" placeholder="예약할때 사용할 이름이므로 실명을 사용해 주세요."/>
                    </div>

                    <div className={styles.insert_box}>
                        <span>휴대폰 번호</span>
                        <input type="text"/>
                    </div>

                    <div className={styles.insert_box}>
                        <span>닉네임</span>
                        <input type="text"/>
                    </div>

                    <div className={styles.insert_box}>
                        <span>프로필 이미지</span>
                        <input type="url"/>
                    </div>
                </div>
                <BigOrangeButton/>
            </div>
        </div>
    );
};

export default Customer;