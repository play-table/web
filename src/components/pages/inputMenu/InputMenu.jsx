import React, {useState} from 'react';
import styles from '../../../styles/pages/inputMenu/InputMenu.module.css';
import InputForm from "../../blocks/InputForm";
import BigOrangeButton from "../../atoms/BigOrangeButton";
import BigWhiteButton from "../../atoms/BigWhiteButton";
import {api} from "../../../common/api/ApiClient";
import {useNavigate, useParams} from "react-router-dom";
const InputMenu = () => {

    const nav = useNavigate();

    const [menuForm, setMenuForm] = useState({
        name:'',
        price:0
    });

    const params = useParams();

    const postMenu = async () => {
        try {
            await api(`/api/v1/store/${params.storeId}/menu`, 'POST', menuForm);
            nav(-1);
        } catch (error) {
            alert('fail')
        }
    }

    const formChangeHandler = (e) => {
        const {name, value} = e.target;
        setMenuForm(prev => ({...prev, [name]:value}))
    }
    return (
        <div className={styles.menu_container}>
            <div className={styles.menu_header}>
                <span>메뉴 등록</span>
            </div>
            <div className={styles.insert_wrap}>
                <InputForm content={"이름"} formChangeHandler={formChangeHandler} name={"name"} value={menuForm.name}/>
                <InputForm content={"가격"} formChangeHandler={formChangeHandler} name={"price"} value={menuForm.price}/>
            </div>
            <BigOrangeButton content={"메뉴 등록하기"} onClickHandler={postMenu}/>
            <br/>
            <BigWhiteButton content={"닫기"}/>
        </div>
    );
};

export default InputMenu;