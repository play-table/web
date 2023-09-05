import React from 'react';
import Menu from '../Layout/menubar/Menubar';

const My = () => {
  return (
    <div>
      <div
        style={{
          width: '100%',
          background: 'yellow',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          paddingBottom: '15vw',
        }}
      >
        <p>test1</p>
        <p>test12</p>
      </div>
      <Menu />
    </div>
  );
};

export default My;
