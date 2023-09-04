import React from 'react';
import styles from '../../styles/atoms/SmallButton.module.css'

const SmallButton = ({content, onClickHandler, type}) => {
    return (
        <button className={
            type==='orange' ?
            styles.orangeButtonColor :
            styles.whiteButtonColor
        } onClick={onClickHandler}>
            {content}
        </button>
    );
};

export default SmallButton;