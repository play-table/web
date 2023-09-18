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
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="customer_container">
      <button
        className={styles.customer_button}
        onClick={() => window.history.back()}
      >
        <span>←</span> 뒤로가기
      </button>
      <div className={styles.customer_wrap}>
        <span>내 정보 입력</span>
        <form onSubmit={handleSubmit}>
          <div className={styles.insert_wrap}>
            <div className={styles.insert_box}>
              <span>이름</span>
              <input
                type="text"
                name="name"
                placeholder="예약할 때 사용할 이름이므로 실명을 사용해 주세요."
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            <div className={styles.insert_box}>
              <span>휴대폰 번호</span>
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
              />
            </div>

            <div className={styles.insert_box}>
              <span>닉네임</span>
              <input
                type="text"
                name="nickName"
                value={formData.nickName}
                onChange={handleInputChange}
              />
            </div>

            <div className={styles.insert_box}>
              <span>프로필 이미지</span>
              <input
                type="url"
                name="profileUrl"
                value={formData.profileUrl}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <BigOrangeButton type="submit" content="정보 입력" />
        </form>
      </div>
    </div>
  );
};

export default Customer;
