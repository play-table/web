import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from './menubar/Menubar';
import { Mobile, PC } from '../../config/Responsive';
import classes from '../../../styles/pages/main.module.css';

const Root = () => {
  return (
    <div id="wrap">
      <main style={{ height: '100vh' }}>
        <PC>
          <div className={classes.pcWrap}>
            <p className={classes.pcWrapInner}>
              화면을 550px 이하로 줄여 주세요.
            </p>
          </div>
        </PC>
        <Mobile>
          <Outlet />
          <Menu />
        </Mobile>
      </main>
    </div>
  );
};

export default Root;
