import React from 'react';
import editClasses from "../../../styles/pages/my/Edit.module.css";
import reviewInputClasses from "../../../styles/pages/review/ReviewInput.module.css";

import MyInfo from "./MyInfo";

const Edit = () => {
    return (
        <div className={editClasses.edit_wrap}>
            <div className={editClasses.header}>
                <h1>내 정보 관리</h1>
            </div>

            <MyInfo value="이름" placeholder="김지혜" />

            <div className={editClasses.input_section}>
                <p className={editClasses.input_title}>닉네임</p>
                <input className={editClasses.input_info} placeholder={"발랄한 맛사냥꾼"}/>
            </div>
            <div className={editClasses.input_section}>
                <p className={editClasses.input_title}>이메일 주소</p>
                <input className={editClasses.input_info} placeholder={"aaa@naver.com"}/>
            </div>
            <div className={editClasses.input_section}>
                <p className={editClasses.input_title}>휴대폰 번호</p>
                <input className={editClasses.input_info} placeholder={"010-2222-2222"}/>
            </div>
            <div className={editClasses.input_section}>
                <p className={editClasses.input_title}>비밀번호</p>
                <input className={editClasses.input_info} placeholder={"새로운 비밀번호로 변경 가능"}/>
            </div>

            <div className={reviewInputClasses.button_review_input_line}>
                <button className={reviewInputClasses.button_review_input}>내 정보 수정</button>
            </div>

            <div className={editClasses.button_area}>
                <p>회원탈퇴</p>
                <p>로그아웃</p>
            </div>

        </div>
    );
};

export default Edit;