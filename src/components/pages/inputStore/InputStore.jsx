import React, {useState} from 'react';
import styles from '../../../styles/pages/inputStore/InputStore.module.css';
import InputForm from "../../blocks/InputForm";
import BigOrangeButton from "../../atoms/BigOrangeButton";
import BigWhiteButton from "../../atoms/BigWhiteButton";
import {useNavigate} from "react-router-dom";
import {api} from "../../../common/api/ApiClient";

const InputStore = () => {

    const nav = useNavigate();

    const [storeForm, setStoreForm] = useState({
        name:'',
        contact:'',
        address:'',
        imageUrl:'',
        openTime:'',
        closeTime:'',
        breakStartTime:'',
        breakEndTime:''
    });

    const [category, setCategory] = useState('KOREAN');
    const categoryHandler = (e) =>{
        setCategory(e.target.value);
    }

    const formChangeHandler = (e) => {
        const {name, value} = e.target;
        setStoreForm(prev=>({...prev, [name]:value}))
    }

    const [days, setDays] = useState([]);

    const addRestDay = (e) => {
        setDays(prev => [...prev, e.target.value])
    }

    const postStore = async () => {
        try {
            await api(`api/v1/store`, 'POST', {...storeForm, 'category': category, 'days':days})
            nav('/owner')
        } catch (error){
            alert('fail')
        }
    }

    return (
        <div className={styles.store_container}>
            <div className={styles.store_header}>
                <span>가게 등록</span>
            </div>
            <div className={styles.insert_wrap}>
            <InputForm content={"가게이름"} formChangeHandler={formChangeHandler} name={"name"} value={storeForm.name}/>
            <InputForm content={"주소"} formChangeHandler={formChangeHandler} name={"address"} value={storeForm.address}/>
            <InputForm content={"전화번호"} formChangeHandler={formChangeHandler} name={"contact"} value={storeForm.contact}/>
            <div className={styles.insert_box}>
                <span>운영시간</span>
                <div className={styles.time_box}>
                    <input type="text" onChange={formChangeHandler} name={"openTime"} value={storeForm.openTime}/>
                    <span>:</span>
                    <input type="text" onChange={formChangeHandler} name={"closeTime"} value={storeForm.closeTime}/>
                </div>
            </div>
            <div className={styles.insert_box}>
                <span>브레이크타임</span>
                <div className={styles.time_box}>
                    <input type="text" onChange={formChangeHandler} name={"breakStartTime"} value={storeForm.breakStartTime}/>
                    <span>:</span>
                    <input type="text" onChange={formChangeHandler} name={"breakEndTime"} value={storeForm.breakEndTime}/>
                </div>
            </div>
            <div className={styles.insert_box}>
                <span>휴무일</span>
                <span style={{margin:"20px"}}>{days}</span>
                <select name="Day" onChange={addRestDay}>
                    <option disabled selected>휴무일</option>
                    <option value="MONDAY">월요일</option>
                    <option value="TUESDAY">화요일</option>
                    <option value="WEDNESDAY">수요일</option>
                    <option value="THURSDAY">목요일</option>
                    <option value="FRIDAY">금요일</option>
                    <option value="SATURDAY">토요일</option>
                    <option value="SUNDAY">일요일</option>
                </select>
            </div>
            <div className={styles.insert_box}>
                <span>음식 카테고리</span>
                <select name="category" onChange={categoryHandler}>
                    <option disabled selected>선택해주세요</option>
                    <option value="KOREAN">한식</option>
                    <option value="CHINESE">중식</option>
                    <option value="JAPANESE">일식</option>
                    <option value="WESTERN">양식</option>
                </select>
            </div>
                <InputForm content={"가게 이미지"} formChangeHandler={formChangeHandler} name={"imageUrl"} value={storeForm.imageUrl}/>

            </div>
            <BigOrangeButton content={"가게 등록하기"} onClickHandler={postStore}/>
            <br/>
            <BigWhiteButton content={"닫기"}/>
        </div>
    );
};

export default InputStore;