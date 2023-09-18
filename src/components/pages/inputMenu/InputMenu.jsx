import React from 'react';
import styles from '../../../styles/pages/inputMenu/InputMenu.module.css';
import InputForm from "../../blocks/InputForm";
import BigOrangeButton from "../../atoms/BigOrangeButton";
import BigWhiteButton from "../../atoms/BigWhiteButton";
const InputMenu = ({content}) => {
    return (
        <div className={styles.menu_container}>
            <div className={styles.menu_header}>
                <span>메뉴 등록</span>
            </div>
            <div className={styles.insert_wrap}>
            <InputForm content={"메뉴 이름"}/>
            <InputForm content={"메뉴 가격"}/>
            </div>
            <BigOrangeButton content={"메뉴 등록하기"}/>
            <br/>
            <BigWhiteButton content={"닫기"}/>
        </div>
    );
};

export default InputMenu;