import React from 'react';
import { SiAirtable } from 'react-icons/si';

import styles from '../../styles/atoms/TableLogo.module.css';
const TableLogo = () => {
  return (
    <div className={styles.logo_container}>
      <SiAirtable size="24px" color="orange" />
      <h3>PlayTable</h3>
    </div>
  );
};

export default TableLogo;
