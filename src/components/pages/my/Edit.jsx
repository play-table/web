import React, { useEffect, useState } from "react";
import editClasses from "../../../styles/pages/my/Edit.module.css";
import reviewInputClasses from "../../../styles/pages/review/ReviewInput.module.css";
import styles from "../../../styles/pages/customer/Customer.module.css";
import MyInfo from "./MyInfo";
import { useParams } from "react-router-dom";
import { api } from "../../../common/api/ApiClient";

const Edit = () => {
  const [formData, setFormData] = useState({
    name: "",
    nickName: "",
    email: "",
    contact: "",
    password: "",
  });

  const { userId } = useParams();

  const fetchUserData = async () => {
    try {
      const response = await api(`/api/v1/customers/${userId}`, "GET");
      return response.data; // 사용자 데이터 반환
    } catch (error) {
      console.error("사용자 데이터를 가져오는데 실패했습니다.", error);
      throw error;
    }
  };

  useEffect(() => {
    // 데이터를 가져와서 formData를 업데이트
    const getUserData = async () => {
      try {
        const userData = await fetchUserData(userId); // 데이터를 비동기로 가져옴

        setFormData({
          name: userData.name || "", // userData.name이 없을 경우 빈 문자열로 설정
          nickName: userData.nickName || "",
          email: "", // 이메일 데이터를 가져오지 않는 경우 빈 문자열로 설정
          contact: userData.contact || "",
          password: "",
        });
      } catch (error) {
        console.error("내 정보 가져오기 오류", error);
      }
    };

    getUserData(); // getUserData 함수 호출

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  const putData = async () => {
    try {
      const requestData = {
        name: formData.name,
        nickName: formData.nickName,
        contact: formData.contact,
      };

      // PUT 요청을 사용하여 데이터를 업데이트합니다.
      await api(`/api/v1/customers/${userId}`, "PUT", requestData);

      // 수정이 완료되면 성공 메시지를 표시하거나 다른 조치를 취할 수 있습니다.
      console.log("내 정보 수정이 완료되었습니다.");

      // 뒤로가기 버튼 클릭 시 이전 페이지로 이동
      window.history.back();
    } catch (error) {
      console.error("내 정보 수정 오류", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className={editClasses.edit_wrap}>
      <button
        className={editClasses.edit_button}
        onClick={() => window.history.back()}
      >
        <span>←</span> 뒤로가기
      </button>
      <div className={editClasses.header}>
        <h1>내 정보 관리</h1>
      </div>
      <form className={styles.customer_form} onSubmit={putData}>
        <div className={styles.insert_wrap}>
          <div className={styles.insert_box}>
            <span className={styles.customer_text}>이름</span>
            <input
              type="text"
              name="name"
              value={formData.name}
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
            <p className={styles.customer_text}>이메일 주소</p>
            <input className={styles.input} placeholder={"aaa@naver.com"} />
          </div>
          <div className={styles.insert_box}>
            <p className={styles.customer_text}>휴대폰 번호</p>
            <input
              type="text"
              name="contact"
              className={styles.input}
              value={formData.contact}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.insert_box}>
            <p className={styles.customer_text}>비밀번호</p>
            <input
              className={styles.input}
              placeholder={"새로운 비밀번호로 변경 가능"}
            />
          </div>
        </div>

        <div className={reviewInputClasses.button_review_input_line}>
          <button
            className={reviewInputClasses.button_review_input}
            type="submit"
          >
            내 정보 수정
          </button>
        </div>

        <div className={editClasses.button_area}>
          <p>회원탈퇴</p>
          <p>로그아웃</p>
        </div>
      </form>
    </div>
  );
};

export default Edit;
