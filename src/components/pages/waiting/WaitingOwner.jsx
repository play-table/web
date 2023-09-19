import BigWhiteButton from "../../atoms/BigWhiteButton";
import SmallButton from "../../atoms/SmallButton";
import MiniStoreInfo from "../../blocks/MiniStoreInfo";
import styles from "../../../styles/pages/waiting/WaitingOwner.module.css";
import {redirect, useNavigate, useParams} from "react-router-dom";

import React, {useEffect, useState} from "react";
import {api} from "../../../common/api/ApiClient";

const WaitingOwner = () => {
  const [reservations, setReservations] = useState([
    // 다른 예약 정보들을 추가하세요.
  ]);

  // 현재 날짜를 받아오는 함수
  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const day = currentDate.getDate().toString().padStart(2, "0");
    return `${year}년 ${month}월 ${day}일`;
  };

  // 예약 승인 처리
  const handleApprove = (id) => {
    const updatedReservations = reservations.map((reservation) =>
      reservation.id === id ? { ...reservation, approved: true } : reservation
    );
    setReservations(updatedReservations);
  };

  // 예약 취소 처리
  const handleCancel = (id) => {
    const updatedReservations = reservations.filter(
      (reservation) => reservation.id !== id
    );
    setReservations(updatedReservations);
  };
  const { storeId } = useParams();

  const deleteData = async (id) => {
    await api(`/api/v1/waiting/${{id}}`, "DELETE", {})
    handleCancel(id);
    redirect();
  }

  const postData = async (total,id) => {
    await api(`/api/v1/waiting/history/${storeId}`, "POST", {
      storeId,
      total
    })
    redirect();
    handleApprove(id)
  }
  console.log(storeId)
  const [data, setData] = useState([]);
  useEffect(()=>{
    getData()
  },[]);
  const getData = async () => {
    const data = await api(`/api/v1/waiting`, "GET", {})
    setData(data);
  }
  console.log(data)
  return (
    <div className={styles.waiting_owner_container}>
      <MiniStoreInfo/>
      <div className={styles.waiting_owner_content}>
        <span className={styles.waiting_owner_content_font}>{getCurrentDate()}</span>
      </div>
      {data.map((reservation,index) => (
        <div key={index} className={styles.waiting_owner_main}>
          <span className={styles.waiting_owner_main_font}>{reservation.id}</span>
          <span className={styles.waiting_owner_main_font}>{reservation.customer_name}</span>
          <span className={styles.waiting_owner_main_font}>
            {reservation.total}명
          </span>
          {!reservation.approved && (
            <>
              <SmallButton
                content="승인"
                type="orange"
                onClickHandler={()=>postData(reservation.total,reservation.id)}

              ></SmallButton>
              <SmallButton
                content="취소"
                type="white"
                onClickHandler={deleteData}
              ></SmallButton>
            </>
          )}
        </div>
      ))}
      <div className={styles.waiting_owner_main_btn}>
        <BigWhiteButton content="닫기"></BigWhiteButton>
      </div>
    </div>
  );
};

export default WaitingOwner;
