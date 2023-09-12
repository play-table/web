import Calendar from "../../atoms/Calander";
import MiniStoreInfo from "../../blocks/MiniStoreInfo";
import styles from "../../../styles/pages/waiting/Reservation.css";
import SmallButton from "../../atoms/SmallButton";
import React, { useState } from "react";
import RoundButton from "../../atoms/RoundButton";
import BigOrangeButton from "../../atoms/BigOrangeButton";
import BigWhiteButton from "../../atoms/BigWhiteButton";
const Reservation = () => {
  // 예약 상태를 나타내는 상태 변수
  const [isReservation, setIsReservation] = useState(false);

  // 선택된 인원 수를 나타내는 상태 변수
  const [selectedPeople, setSelectedPeople] = useState(1);

  // 예약 버튼 클릭 핸들러
  const handleReservationClick = () => {
    // 예약 상태를 토글
    setIsReservation(!isReservation);
  };

  // 라운드 버튼 클릭 핸들러
  const handleRoundButtonClick = (num) => {
    setSelectedPeople(num);
  };
  return (
    <>
      <div className="reservation_container">
        <MiniStoreInfo />
        <div className="reservation_main">
          <Calendar />
        </div>
        <div className="reservation_main_time">
          <SmallButton
            content="5:30"
            type={isReservation ? "white" : "orange"}
            onClickHandler={handleReservationClick}
          />
          <SmallButton
            content="5:30"
            type={isReservation ? "white" : "orange"}
            onClickHandler={handleReservationClick}
          />
          <SmallButton
            content="5:30"
            type={isReservation ? "white" : "orange"}
            onClickHandler={handleReservationClick}
          />
          <SmallButton
            content="5:30"
            type={isReservation ? "white" : "orange"}
            onClickHandler={handleReservationClick}
          />
          <SmallButton
            content="5:30"
            type={isReservation ? "white" : "orange"}
            onClickHandler={handleReservationClick}
          />
          <SmallButton
            content="5:30"
            type={isReservation ? "white" : "orange"}
            onClickHandler={handleReservationClick}
          />
        </div>
        <div className="reservation_main_person">
          <RoundButton
            content="1명"
            type={selectedPeople === 1 ? "click" : "noColor"}
            onClickHandler={() => handleRoundButtonClick(1)}
          />
          <RoundButton
            content="2명"
            type={selectedPeople === 2 ? "click" : "noColor"}
            onClickHandler={() => handleRoundButtonClick(2)}
          />
          <RoundButton
            content="3명"
            type={selectedPeople === 3 ? "click" : "noColor"}
            onClickHandler={() => handleRoundButtonClick(3)}
          />
          <RoundButton
            content="4명"
            type={selectedPeople === 4 ? "click" : "noColor"}
            onClickHandler={() => handleRoundButtonClick(4)}
          />
          <RoundButton
            content="5명"
            type={selectedPeople === 5 ? "click" : "noColor"}
            onClickHandler={() => handleRoundButtonClick(5)}
          />
          <RoundButton
            content="6명"
            type={selectedPeople === 6 ? "click" : "noColor"}
            onClickHandler={() => handleRoundButtonClick(6)}
          />
          <RoundButton
            content="7명"
            type={selectedPeople === 7 ? "click" : "noColor"}
            onClickHandler={() => handleRoundButtonClick(7)}
          />
        </div>
        <div className="reservation_main_btn_container">
          <BigOrangeButton content="예약 등록하기" />
        </div>
        <div className="reservation_main_btn_container2">
          <BigWhiteButton content="닫기"></BigWhiteButton>
        </div>
      </div>
    </>
  );
};

export default Reservation;
