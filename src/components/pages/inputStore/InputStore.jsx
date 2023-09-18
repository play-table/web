import React from 'react';
import styles from '../../../styles/pages/inputStore/InputStore.module.css';
import InputForm from "../../blocks/InputForm";
import BigOrangeButton from "../../atoms/BigOrangeButton";
import BigWhiteButton from "../../atoms/BigWhiteButton";

const InputStore = () => {
    return (
        <div className={styles.store_container}>
            <div className={styles.store_header}>
                <span>가게 등록</span>
            </div>
            <div className={styles.insert_wrap}>
            <InputForm content={"가게이름"}/>
            <InputForm content={"주소"}/>
            <InputForm content={"전화번호"}/>
            <div className={styles.insert_box}>
                <span>운영시간</span>
                <div className={styles.time_box}>
                    <input type="text"/>
                    <span>:</span>
                    <input type="text"/>
                </div>
            </div>
            <div className={styles.insert_box}>
                <span>브레이크타임</span>
                <div className={styles.time_box}>
                    <input type="text"/>
                    <span>:</span>
                    <input type="text"/>
                </div>
            </div>
            <div className={styles.insert_box}>
                <span>휴무일</span>
                <select name="Day">
                    <option disabled selected>휴무일</option>
                    <option value="Monday">월</option>
                    <option value="Monday">화</option>
                    <option value="Monday">수</option>
                    <option value="Monday">목</option>
                    <option value="Monday">금</option>
                    <option value="Monday">토</option>
                    <option value="Monday">일</option>
                </select>
            </div>
            <div className={styles.insert_box}>
                <span>음식 카테고리</span>
                <select name="category">
                    <option disabled selected>음식 카테고리</option>
                    <option value="korean">한식</option>
                    <option value="">중식</option>
                    <option value="">일식</option>
                    <option value="">양식</option>
                    <option value="">기타</option>
                </select>
            </div>
            <InputForm content={"가게이미지"}/>
            </div>
            <BigOrangeButton content={"가게 등록하기"}/>
            <br/>
            <BigWhiteButton content={"닫기"}/>
        </div>
    );
};

export default InputStore;