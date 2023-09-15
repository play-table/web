import BigWhiteButton from "../../atoms/BigWhiteButton";
import SmallButton from "../../atoms/SmallButton";
import MiniStoreInfo from "../../blocks/MiniStoreInfo";
import styles from "../../../styles/pages/waiting/WaitingOner.css";
import { useNavigate } from "react-router-dom";

import React, { useState } from "react";

const WaitingOner = () => {
  const [reservations, setReservations] = useState([
    {
      id: 1,
      name: "김지혜",
      numberOfPeople: 4,
      time: "오후 5:00",
      approved: false,
    },
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

  return (
    <div className="waiting_oner_container">
      <MiniStoreInfo></MiniStoreInfo>
      <div className="waiting_oner_content">
        <span className="waiting_oner_content_font">{getCurrentDate()}</span>
      </div>
      {reservations.map((reservation) => (
        <div key={reservation.id} className="waiting_oner_main">
          <span className="waiting_oner_main_font">{reservation.id}</span>
          <span className="waiting_oner_main_font">{reservation.name}</span>
          <span className="waiting_oner_main_font">
            {reservation.numberOfPeople}명
          </span>
          <span className="waiting_oner_main_font">{reservation.time}</span>
          {!reservation.approved && (
            <>
              <SmallButton
                content="승인"
                type="orange"
                onClickHandler={() => handleApprove(reservation.id)}
              ></SmallButton>
              <SmallButton
                content="취소"
                type="white"
                onClickHandler={() => handleCancel(reservation.id)}
              ></SmallButton>
            </>
          )}
        </div>
      ))}
      <div className="waiting_oner_main_btn">
        <BigWhiteButton content="닫기"></BigWhiteButton>
      </div>
    </div>
  );
};

export default WaitingOner;
