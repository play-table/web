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
            <InputForm/>
            <InputForm/>
            <BigOrangeButton/>
            <BigWhiteButton/>
        </div>
    );
};

export default InputMenu;