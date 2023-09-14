import React from 'react';
import styles from "../../styles/blocks/InputForm.module.css";

const InputForm = ({content}) => {
    return (
            <div className={styles.insert_box}>
                <span>{content}</span>
                <input type="text"/>
            </div>
    );
};

export default InputForm;