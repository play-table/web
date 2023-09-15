import Calendar from "../../atoms/Calander";
import MiniStoreInfo from "../../blocks/MiniStoreInfo";
import styles from "../../../styles/pages/waiting/Reservation.css";
import SmallButton from "../../atoms/SmallButton";
import React, { useState } from "react";
import RoundButton from "../../atoms/RoundButton";
import BigOrangeButton from "../../atoms/BigOrangeButton";
import BigWhiteButton from "../../atoms/BigWhiteButton";
import { useNavigate } from "react-router-dom";
import "../../../styles/pages/home/SwiperStyles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import axios from "axios";

const Reservation = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [isPrevMonth, setIsPrevMonth] = useState(false);
  const [isNextMonth, setIsNextMonth] = useState(false);
  const navigate = useNavigate();

  const handleOpenReservation = () => {
    navigate("/switch?mode=reservation");
  };
  const handleButtonClick = () => {
    console.log("BigWhiteButton clicked");
    navigate(-1); // 혹은 다른 작업 수행
  };

  // 예약 상태를 나타내는 상태 변수
  const [moreTimes, setMoreTimes] = useState([
    { time: "5:30", selected: false },
    { time: "6:00", selected: false },
    { time: "5:30", selected: false },
    { time: "6:00", selected: false },
    { time: "5:30", selected: false },
    { time: "6:00", selected: false },
    { time: "5:30", selected: false },
    { time: "6:00", selected: false },
    { time: "5:30", selected: false },
    { time: "6:00", selected: false },
    { time: "5:30", selected: false },
    { time: "6:00", selected: false },
    // 여기에 더 많은 시간 버튼을 추가하세요
  ]);

  // 더 많은 인원을 나타내는 버튼 상태 변수
  const [morePeople, setMorePeople] = useState([
    { people: 1, selected: false },
    { people: 2, selected: false },
    { people: 3, selected: false },
    { people: 1, selected: false },
    { people: 2, selected: false },
    { people: 3, selected: false },
    { people: 1, selected: false },
    { people: 2, selected: false },
    { people: 3, selected: false },
    { people: 1, selected: false },
    { people: 2, selected: false },
    { people: 3, selected: false },
    { people: 1, selected: false },
    { people: 2, selected: false },
    { people: 3, selected: false },
    // 여기에 더 많은 인원 버튼을 추가하세요
  ]);

  // 시간 버튼 클릭 핸들러
  const handleTimeButtonClick = (index) => {
    const updatedTimes = [...moreTimes];
    updatedTimes[index].selected = !updatedTimes[index].selected;
    setMoreTimes(updatedTimes);
  };

  // 인원 버튼 클릭 핸들러
  const handlePeopleButtonClick = (index) => {
    const updatedPeople = [...morePeople];
    updatedPeople[index].selected = !updatedPeople[index].selected;
    setMorePeople(updatedPeople);
  };

  return (
    <>
      <div className="reservation_container">
        <MiniStoreInfo />
        <div className="reservation_main">
          <Calendar
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            isPrevMonth={isPrevMonth}
            isNextMonth={isNextMonth}
          />
        </div>
        <div className="reservation_main_time">
          <Swiper
            slidesPerView={6}
            navigation={false} // Navigation 모듈 사용
          >
            {moreTimes.map((item, index) => (
              <SwiperSlide key={index}>
                <SmallButton
                  content={item.time}
                  type={item.selected ? "white" : "orange"}
                  onClickHandler={() => handleTimeButtonClick(index)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="reservation_main_person">
          <Swiper
            slidesPerView={7}
            spaceBetween={20}
            pagination={{ clickable: true }}
            className="mySwiper"
            navigation={false} // Navigation 모듈 사용
          >
            {morePeople.map((item, index) => (
              <SwiperSlide key={index}>
                <RoundButton
                  content={`${item.people}명`}
                  type={item.selected ? "click" : "noColor"}
                  onClickHandler={() => handlePeopleButtonClick(index)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="reservation_main_btn_container">
          <BigOrangeButton
            content="예약 등록하기"
            onClickHandler={handleOpenReservation}
          />
        </div>
        <div className="reservation_main_btn_container2">
          <BigWhiteButton
            content="닫기"
            onClickHandler={handleButtonClick}
          ></BigWhiteButton>
        </div>
      </div>
    </>
  );
};

export default Reservation;
