import React from 'react';
import styles from '../../../styles/pages/home/HomeHeader.module.css';
import TableLogo from '../../atoms/TableLogo';
import HomeSearchInput from './HomeSearchInput';

const HomeHeader = () => {
  return (
    <div className={styles.header_container}>
      <TableLogo />
      <HomeSearchInput />
    </div>
  );
};

export default HomeHeader;
