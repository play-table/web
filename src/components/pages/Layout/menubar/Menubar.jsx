import React from 'react';
import styles from '../../../../styles/pages/layout/menubar/Menubar.module.css';
import {
  AiOutlineCalendar,
  AiOutlineEdit,
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineUser,
} from 'react-icons/ai';
import MenuTap from './MenuTap';

const Menubar = () => {
  const menus = [
    {
      icon: <AiOutlineHome size="24px" />,
      redirect: '/',
    },
    {
      icon: <AiOutlineSearch size="24px" />,
      redirect: '/search',
    },
    {
      icon: <AiOutlineEdit size="24px" />,
      redirect: '/review',
    },
    {
      icon: <AiOutlineCalendar size="24px" />,
      redirect: '/',
    },
    {
      icon: <AiOutlineUser size="24px" />,
      redirect: '/my',
    },
  ];

  return (
    <div className={styles.menu_container}>
      {menus.map((value, index) => (
        <MenuTap key={index} menu={value} />
      ))}
    </div>
  );
};

export default Menubar;
