import React from "react";
import styles from "../../styles/atoms/BigWhiteButton.module.css";
const BigWhiteButton = (props) => {

  return (
    <button className={styles.big_white_btn} onClick={props.onClick}>
      {props.content}
    </button>
  );
};

export default BigWhiteButton;
