import React from 'react';
import styles from "../../styles/blocks/InputForm.module.css";

const InputForm = ({content, name, value,  formChangeHandler}) => {
    return (
            <div className={styles.insert_box}>
                <span>{content}</span>
                <input type="text" name={name} value={value} onChange={formChangeHandler}/>
            </div>
    );
};

export default InputForm;