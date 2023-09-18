import React, {useEffect, useState} from 'react';
import styles from '../../../styles/pages/store/Store.module.css';
import StoreHeader from "./StoreHeader";
import StoreInfo from "./StoreInfo";
import StoreMainBtn from "./StoreMainBtn";
import StoreTapBtn from "./StoreTapBtn";
import StoreHomeDetail from "./StoreHomeDetail";
import StoreMenuDetail from "./StoreMenuDetail";
import ReviewCard from "../../blocks/ReviewCard";
import {useParams} from "react-router-dom";
import {api} from "../../../common/api/ApiClient";
const Store = () => {
    const params = useParams();
    const [store, setStore] = useState({});
    const [tap, setTap] = useState("StoreHomeDetail");
    const onClickHandler = (e)=>{
        const {value} = e.target;
        setTap(value);
    }
    const getStoreById = async () => {
        try {
            const data = await api(`/api/v1/store/${params.id}`, "GET", {})
            setStore(data);
            console.log(data)
        } catch (error){
            alert('fail')
        }
    }

    useEffect(()=>{
        getStoreById()
    }, [])
    return (
        <div className={styles.main_container}>
            <StoreHeader store={store}/>
            <StoreInfo store={store}/>
            <StoreMainBtn store={store}/>
            <StoreTapBtn onCLickHandler={onClickHandler}/>
            {tap === "StoreHomeDetail" && <StoreHomeDetail store={store}/>}
            {tap === "StoreMenuDetail" && <StoreMenuDetail store={store}/>}
            {tap === "ReviewCard" && <ReviewCard store={store}/>}
        </div>
    );
};

export default Store;