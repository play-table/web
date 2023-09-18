import React from 'react';
import styles from '../../../styles/pages/store/StoreHeader.module.css';
import {useNavigate} from "react-router-dom";
import {AiOutlineHome} from "react-icons/ai";
import {MdKeyboardBackspace} from "react-icons/md";

const StoreHeader = ({store}) => {
    const nav = useNavigate();
    return (
        <div className={styles.header}>
            <img src={store.imageUrl} alt="store"/>
                <div className={styles.header_fixed}>
                    <button onClick={e=>nav(-1)}><MdKeyboardBackspace size="24px" /></button>
                    <button  onClick={e=>nav('/')}><AiOutlineHome size="24px" /></button>
                </div>
        </div>
    );
};

export default StoreHeader;