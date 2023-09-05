import React from 'react';

import styles from '../../../styles/pages/home/ServiceButton.module.css';
import { useNavigate } from 'react-router-dom';
const ServiceButton = ({ content, redirect }) => {
  const nav = useNavigate();

  const onClickHandelr = () => nav(redirect);

  return (
    <button onClick={onClickHandelr} className={styles.button_wrap}>
      {content}
    </button>
  );
};

export default ServiceButton;
