import BigWhiteButton from "../../atoms/BigWhiteButton";
import SmallButton from "../../atoms/SmallButton";
import MiniStoreInfo from "../../blocks/MiniStoreInfo";
import styles from "../../../styles/pages/waiting/WaitingOwner.css";
import {useNavigate, useParams} from "react-router-dom";

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
  const putData = async (e) => {
    const {value} = e.target
    await api(`/api/v1/waiting/${storeId}/${value}`, "PUT", {})
  }
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
    <div className="waiting_owner_container">
      <MiniStoreInfo></MiniStoreInfo>
      <div className="waiting_owner_content">
        <span className="waiting_owner_content_font">{getCurrentDate()}</span>
      </div>
      {data.map((reservation,index) => (
        <div key={index} className="waiting_owner_main">
          <span className="waiting_owner_main_font">{reservation.id}</span>
          <span className="waiting_owner_main_font">{reservation.customer_name}</span>
          <span className="waiting_owner_main_font">
            {reservation.total}명
          </span>
          {!reservation.approved && (
            <>
              <SmallButton
                content="승인"
                type="orange"
                valie="ENTRANCE"
                onClick={putData}
                onClickHandler={() => handleApprove(reservation.id)}

              ></SmallButton>
              <SmallButton
                content="취소"
                type="white"
                valie="RESTAURANT_CANCEL"
                onClick={putData}
                onClickHandler={() => handleCancel(reservation.id)}
              ></SmallButton>
            </>
          )}
        </div>
      ))}
      <div className="waiting_owner_main_btn">
        <BigWhiteButton content="닫기"></BigWhiteButton>
      </div>
    </div>
  );
};

export default WaitingOwner;
