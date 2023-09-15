import styles from "../../../styles/pages/waiting/ReservationConfirm.css";
import BigWhiteButton from "../../atoms/BigWhiteButton";
import Calendar from "../../atoms/Calander";
import RoundButton from "../../atoms/RoundButton";
import SmallButton from "../../atoms/SmallButton";
import MiniStoreInfo from "../../blocks/MiniStoreInfo";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "../../../styles/pages/my/Myprofile.module.css";

const ReservationConfirm = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [isPrevMonth, setIsPrevMonth] = useState(false);
  const [isNextMonth, setIsNextMonth] = useState(false);
  const nav = useNavigate();
  const [switchMenu, setSwitchMenu] = useState(true);
  const [error, setError] = useState("");
  const menuSwitch = (data) => {
    if (data == "res") {
      setSwitchMenu(true);
      setError("");
    } else {
      setSwitchMenu(false);
      setError("");
    }
  };

  const goToEdit = () => {
    nav("/edit");
  };

  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const day = currentDate.getDate().toString().padStart(2, "0");
    return `${year}년 ${month}월 ${day}일`;
  };

  return (
    <>
      <div className="reservation_confirm_container">
        <MiniStoreInfo />
        <div>
          <div className={classes.veiw_container}>
            <div
              style={{
                borderBottom: switchMenu ? "1px solid #F9B32C" : "",
                cursor: "pointer",
              }}
              onClick={() => {
                menuSwitch("res");
              }}
            >
              <p>예약</p>
            </div>
            <div
              style={{
                borderBottom: switchMenu ? "" : "1px solid #F9B32C",
                cursor: "pointer",
              }}
              onClick={() => {
                menuSwitch("rev");
              }}
            >
              <p>줄서기</p>
            </div>
          </div>
        </div>
        <div className="reservation_confirm_head_content">
          <span className="reservation_confirm_font">
            예약 날짜 : {getCurrentDate()}
          </span>
        </div>
        <div className="reservation_confirm_main">
          <Calendar
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            isPrevMonth={isPrevMonth}
            isNextMonth={isNextMonth}
          />
        </div>
        <div className="reservation_confirm_btn">
          <SmallButton content="5:30" type="orange"></SmallButton>
        </div>
        <div className="reservation_confirm_btn">
          <RoundButton content="4명 " type="click" />
        </div>
        <div className="reservation_confirm_content">
          <p className="reservation_confirm_content_font">주의사항</p>
        </div>
        <div className="reservation_confirm_content2">
          <p className="reservation_confirm_content_sub_font">
            노쇼를 하면 불이익이 있습니다.
          </p>
        </div>
        <div className="reservation_confirm_footBtn">
          <BigWhiteButton content="웨이팅 취소"></BigWhiteButton>
        </div>
      </div>
    </>
  );
};

export default ReservationConfirm;
