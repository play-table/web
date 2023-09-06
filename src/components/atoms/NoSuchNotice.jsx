import React from 'react';
import styles from '../../styles/atoms/NoSuchNotice.module.css';
import { AiOutlineExclamationCircle } from 'react-icons/ai';

const NoSuchNotice = () => {
  return (
    <div className={styles.container}>
      <AiOutlineExclamationCircle size="72px" />
      <p>앗! 검색결과가 없어요.</p>
    </div>
  );
};

export default NoSuchNotice;
