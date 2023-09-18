import React, {useState} from "react";
import BigOrangeButton from "../../atoms/BigOrangeButton";
import styles from "../../../styles/pages/customer/Customer.module.css";
import {api} from "../../../common/api/ApiClient";
import {useNavigate, useSearchParams} from "react-router-dom";
import axios from "axios";

const Customer = ({token}) => {
  console.log({token})
  const [searchParams, setSearchParams] = useSearchParams();
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    realName: "",
    contact: "",
    nickName: "",
    profileImage: ""
  });
  const [role, setRole] = useState('CUSTOMER')

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const requestData = {
        realName: formData.realName,
        contact: formData.contact,
        nickName: formData.nickName,
        profileImage: formData.profileImage,
        role:role
      };

      // api 함수를 사용하여 데이터를 보냅니다.
      // await api("/api/v1/member/join", "post", requestData);
      const {data} = await axios.post(`/api/v1/member/join`, requestData, {headers:{
        Authorization:`Bearer ${token}`
        }})

      localStorage.setItem('token', data.token);
      nav(data.redirect);

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
                name="realName"
                placeholder="예약할 때 사용할 이름이므로 실명을 사용해 주세요."
                value={formData.realName}
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
                onChange={()=>setRole('OWNER')}
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
