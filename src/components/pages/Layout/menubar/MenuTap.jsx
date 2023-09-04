import React from 'react';
import styles from '../../../../styles/pages/layout/menubar/Menubar.module.css';
import { Link } from 'react-router-dom';

const MenuTap = ({ menu }) => {
  return (
    <div className={styles.icon_wrap}>
      <Link to={menu.redirect}>{menu.icon}</Link>
    </div>
  );
};

export default MenuTap;
