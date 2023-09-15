import React, { useState, useEffect } from "react";
import MiniStoreInfo from "../../blocks/MiniStoreInfo";
import Calendar from "../../atoms/Calander";
import RoundButton from "../../atoms/RoundButton";
import SmallButton from "../../atoms/SmallButton";
import BigWhiteButton from "../../atoms/BigWhiteButton";
import { useNavigate } from "react-router-dom";
import classes from "../../../styles/pages/my/Myprofile.module.css";
import { useParams } from "react-router-dom";

const WaitingComponent = () => {
  const { page } = useParams(); // URL에서 경로 파라미터를 가져옴
  const navigate = useNavigate();
  const nav = useNavigate();
  const [switchMenu, setSwitchMenu] = useState(true);
  const [error, setError] = useState("");
  const [selectedDay, setSelectedDay] = useState(null);
  const [isPrevMonth, setIsPrevMonth] = useState(false);
  const [isNextMonth, setIsNextMonth] = useState(false);

  useEffect(() => {
    // 경로 파라미터에 따라 switchMenu 상태 변경
    if (page === "switch") {
      setSwitchMenu(false);
    } else {
      setSwitchMenu(true);
    }
  }, [page]);

  const menuSwitch = (data) => {
    if (data === "res") {
      setSwitchMenu(true);
      setError("");
    } else {
      setSwitchMenu(false);
      setError("");
    }
  };

  const handleButtonClick = () => {
    console.log("BigWhiteButton clicked");
    navigate(-1); // 혹은 다른 작업 수행
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
      <div className="waiting_check_container">
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
        {switchMenu ? (
          // 예약 내용
          <>
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
          </>
        ) : (
          // 줄서기 내용
          <>
            <div className="waiting_check_main">
              <span className="waiting_check_main_font">내 웨이팅 번호</span>
            </div>
            <div className="waiting_check_main2">
              <span className="waiting_check_sub_font">31번</span>
            </div>
            <div className="waiting_check_main2">
              <p className="waiting_check_sub_font2">현재 대기중인 팀 </p>
              <p className="waiting_check_sub_font2"> 30팀</p>
            </div>
            <div className="waiting_check_sub">
              <BigWhiteButton
                content="웨이팅 취소"
                onClickHandler={handleButtonClick}
              ></BigWhiteButton>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default WaitingComponent;
