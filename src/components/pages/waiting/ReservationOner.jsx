import React, { useEffect, useState } from "react";
import SmallButton from "../../atoms/SmallButton";
import MiniStoreInfo from "../../blocks/MiniStoreInfo";
import styles from "../../../styles/pages/waiting/ReservationOner.css";
import BigWhiteButton from "../../atoms/BigWhiteButton";

const ReservationOner = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 백엔드 API에서 예약 정보를 가져오는 함수
    async function fetchReservations() {
      try {
        const response = await fetch("/api/v1/reservation"); // 백엔드 API 엔드포인트
        const data = await response.json();
        setReservations(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching reservation:", error);
      }
    }

    fetchReservations();
  }, []);

  // 예약 승인 처리
  const handleApprove = (id) => {
    const updatedReservations = reservations.map((reservation) =>
      reservation.id === id ? { ...reservation, approved: true } : reservation
    );
    setReservations(updatedReservations);
  };
  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const day = currentDate.getDate().toString().padStart(2, "0");
    return `${year}년 ${month}월 ${day}일`;
  };

  // 예약 취소 처리
  const handleCancel = (id) => {
    const updatedReservations = reservations.filter(
      (reservation) => reservation.id !== id
    );
    setReservations(updatedReservations);
  };

  return (
    <>
      <div className="reservation_oner_container">
        <MiniStoreInfo />
        <div className="reservation_oner_content">
          <span className="reservation_oner_content_font">
            {getCurrentDate()}
          </span>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          reservations.map((reservation) => (
            <div key={reservation.id} className="reservation_oner_main">
              <span className="reservation_oner_main_font">
                {reservation.id}
              </span>
              <span className="reservation_oner_main_font">
                {reservation.name}
              </span>
              <span className="reservation_oner_main_font">
                {reservation.numberOfPeople}명
              </span>
              <span className="reservation_oner_main_font">
                {reservation.time}
              </span>
              {!reservation.approved && (
                <>
                  <SmallButton
                    content="승인"
                    type="orange"
                    onClickHandler={() => handleApprove(reservation.id)}
                  />
                  <SmallButton
                    content="취소"
                    type="white"
                    onClickHandler={() => handleCancel(reservation.id)}
                  />
                </>
              )}
            </div>
          ))
        )}
        <div className="reservation_oner_main_btn">
          <BigWhiteButton content="닫기" />
        </div>
      </div>
    </>
  );
};

export default ReservationOner;
