import React, {useState} from 'react';
import styles from '../../../styles/pages/store/Store.module.css';
import StoreHeader from "./StoreHeader";
import StoreInfo from "./StoreInfo";
import StoreMainBtn from "./StoreMainBtn";
import StoreTapBtn from "./StoreTapBtn";
import StoreHomeDetail from "./StoreHomeDetail";
import StoreMenuDetail from "./StoreMenuDetail";
import ReviewCard from "../../blocks/ReviewCard";
const Store = () => {
    const [tap, setTap] = useState("StoreHomeDetail");
    const onClickHandler = (e)=>{
        const {value} = e.target;
        setTap(value);
    }
    return (
        <div className={styles.main_container}>
            <StoreHeader/>
            <StoreInfo/>
            <StoreMainBtn/>
            <StoreTapBtn onCLickHandler={onClickHandler}/>
            {tap === "StoreHomeDetail" && <StoreHomeDetail/>}
            {tap === "StoreMenuDetail" && <StoreMenuDetail/>}
            {tap === "ReviewCard" && <ReviewCard/>}
        </div>
    );
};

export default Store;