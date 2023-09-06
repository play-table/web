import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import styles from '../../../styles/pages/home/HomeSearchInput.module.css';
import { useNavigate } from 'react-router-dom';

const HomeSearchInput = () => {
  const nav = useNavigate();
  const onClickHandler = () => nav('/search');
  return (
    <button className={styles.button_wrap} onClick={onClickHandler}>
      <div className={styles.input_wrap}>
        <AiOutlineSearch size={'24px'} />
        레스토랑 검색
      </div>
    </button>
  );
};

export default HomeSearchInput;
