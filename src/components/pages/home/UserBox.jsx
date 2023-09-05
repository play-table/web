import React from 'react';

import styles from '../../../styles/pages/home/UserBox.module.css';
const UserBox = ({ user }) => {
  return (
    <div className={styles.user_container}>
      <img src={user.image} />
      <span>{user.nickName}</span>
    </div>
  );
};

export default UserBox;
