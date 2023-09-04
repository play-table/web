import React from 'react';
import {useNavigate} from "react-router-dom";
import {mbtiResult} from "../../common/api/ApiGetService";

const Menu = () => {

  const nav = useNavigate();

  const myHandler = () => {
    nav('/my')
  }

  const test = () => {
    mbtiResult().then((res) => {

    }).catch((err) => {

    })
  }

  return (
    <div style={{display : 'flex', justifyContent : 'space-between', alignItems : 'center', width : '100%', background : 'green', height : '15vw', position : 'fixed', bottom : '0px'}}>
      <div onClick={test}>menu1</div>
      <div>menu2</div>
      <div>menu3</div>
      <div>menu4</div>
      <div onClick={myHandler}>menu5</div>
    </div>
  );
};

export default Menu;