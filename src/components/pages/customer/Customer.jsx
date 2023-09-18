import React, { useState } from "react";
import axios from "axios"; // axios 라이브러리를 import
import BigOrangeButton from "../../atoms/BigOrangeButton";
import styles from "../../../styles/pages/customer/Customer.module.css";
import { api } from "../../../common/api/ApiClient";

const Customer = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    nickName: "",
    profileUrl: "",
    isStoreOwner: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const requestData = {
        name: formData.name,
        contact: formData.contact,
        nickName: formData.nickName,
        profileUrl: formData.profileUrl,
      };

      // api 함수를 사용하여 데이터를 보냅니다.
      const response = await api("/api/v1/customers", "post", requestData);

      console.log("API 호출 성공", response);

      // 뒤로가기 버튼 클릭 시 이전 페이지로 이동
      window.history.back();
    } catch (error) {
      console.error("API 호출 오류", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: inputValue });
  };

  return (
    <div className={styles.customer_container}>
      <button
        className={styles.customer_button}
        onClick={() => window.history.back()}
      >
        <span>←</span> 뒤로가기
      </button>
      <div className={styles.customer_wrap}>
        <span>회원정보 입력</span>
        <form className={styles.customer_form} onSubmit={handleSubmit}>
          <div className={styles.insert_wrap}>
            <div className={styles.insert_box}>
              <span className={styles.customer_text}>이름</span>
              <input
                type="text"
                name="name"
                placeholder="예약할 때 사용할 이름이므로 실명을 사용해 주세요."
                value={formData.name}
                onChange={handleInputChange}
                className={styles.input}
              />
            </div>

            <div className={styles.insert_box}>
              <span className={styles.customer_text}>휴대폰 번호</span>
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                className={styles.input}
              />
            </div>

            <div className={styles.insert_box}>
              <span className={styles.customer_text}>닉네임</span>
              <input
                type="text"
                name="nickName"
                value={formData.nickName}
                onChange={handleInputChange}
                className={styles.input}
              />
            </div>

            <div className={styles.insert_box}>
              <span className={styles.customer_text}>프로필 이미지</span>
              <input
                type="url"
                name="profileUrl"
                value={formData.profileUrl}
                onChange={handleInputChange}
                className={styles.input}
              />
            </div>
            <div className={styles.customer_check_container}>
              <span className={styles.customer_check_text}>점주</span>
              <input
                type="checkbox"
                name="isStoreOwner"
                checked={formData.isStoreOwner}
                onChange={handleInputChange}
                id={styles.checkbox}
              />
              <label
                htmlFor={styles.checkbox}
                className={styles.customCheckbox}
              ></label>
            </div>
          </div>
          <BigOrangeButton type="submit" content="시작하기" />
        </form>
      </div>
    </div>
  );
};

export default Customer;
