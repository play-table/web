import React from "react";
import editClasses from "../../../styles/pages/my/Edit.module.css";

const MyInfo = (props) => {
  return (
    <div className={editClasses.input_section}>
      <input
        className={editClasses.input_info}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default MyInfo;
