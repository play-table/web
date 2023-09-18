import Calendar from "../../atoms/Calander";
import MiniStoreInfo from "../../blocks/MiniStoreInfo";
import SmallButton from "../../atoms/SmallButton";
import React, { useEffect, useState } from "react";
import RoundButton from "../../atoms/RoundButton";
import BigOrangeButton from "../../atoms/BigOrangeButton";
import BigWhiteButton from "../../atoms/BigWhiteButton";
import { useNavigate, useParams } from "react-router-dom";
import "../../../styles/pages/home/SwiperStyles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import axios from "axios";
import { api } from "../../../common/api/ApiClient";
import styles from "../../../styles/pages/waiting/Reservation.module.css";

const Reservation = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [isPrevMonth, setIsPrevMonth] = useState(false);
  const [isNextMonth, setIsNextMonth] = useState(false);
  const [isTimeIdx, setIsTimeIdx] = useState("");
  const [isHumanIdx, setIsHumanIdx] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const { storeId } = useParams();
  const getData = async () => {
    const data = await api(`/api/v1/reservation/${storeId}`, "GET", {});
    setData(data);
  };
  const putData = async (e) => {

    const {value} = e.target;
    await api(`/api/v1/reservation/${storeId}/${value}`, "PUT", {})
    await api(`/api/v1/reservation/${storeId}/${value}`, "PUT", {});
  };

  const handleOpenReservation = () => {
    let formattedDate;

    if (selectedDay) {
      const year = selectedDay.getFullYear();
      const month = (selectedDay.getMonth() + 1).toString().padStart(2, "0");
      const day = selectedDay.getDate().toString().padStart(2, "0");
      formattedDate = `${year}-${month}-${day}`;
    }


      api('/api/v1/reservation/c3d5c454-9682-400e-8cb9-2f8f96128e2c', "POST",{
      reservationDay : formattedDate,
      reservationTime : formatTime(moreTimes[isTimeIdx].time),
      totalPeople : morePeople[isHumanIdx].people,
      // customerId : "550e8400-e29b-41d4-a716-446655440000",
      // customerName : "이세인",
      status : "WAITING"
    }).then((res) => {
      navigate(`/waiting/${storeId}/check?day=${selectedDay}&time=${moreTimes[isTimeIdx].time}&people=${morePeople[isHumanIdx].people}`);
    }).catch((err) => {
      console.log(err);
    })
  };
  const handleButtonClick = () => {
    console.log("BigWhiteButton clicked");
    navigate(-1); // 혹은 다른 작업 수행
  };

  function formatTime(timeStr) {
    const [hours, minutes] = timeStr.split(":");
    const formattedHours = hours.padStart(2, "0");
    const formattedMinutes = minutes.padStart(2, "0");
    const seconds = "00"; // 초를 추가할 경우, 필요한 로직을 구현하세요.

    return `${formattedHours}:${formattedMinutes}:${seconds}`;
  }

  const dateToString = (time) =>
    Number(time.time.split(":")[1]) +
    (time.time.split(":")[0] === "30" ? 0.5 : 0);


  // 예약 시간 선택 리스트
  const [moreTimes, setMoreTimes] = useState([]);
  const dateToString = (time) => Number(time.time.split(":")[0]) + (time.time.split(":")[1]==="30" ? 0.5 : 0)

  const initTimeset = (startTime,endTime)=>{
    const s = dateToString(startTime);
    const e = dateToString(endTime);
    const reservationTimeList = []
    for(let i= s; i <= e;  i += 0.5){
      const t = (i+"").split(".");
      const time = t[0] + (t.length === 2?":30":":00");
      reservationTimeList.push({time, selected: false});
    }
    console.log(reservationTimeList);
    setMoreTimes(reservationTimeList);
  }

  // 인원 선택 리스트
  const [morePeople, setMorePeople] = useState([]);
  const reservationPeopleList = [];

  const initPeopleSet = (reservationPeople) => {
    for (let people= 1; people<=reservationPeople; people++) {
      reservationPeopleList.push({people,  selected: false})
    }
    console.log(reservationPeopleList);
    setMorePeople(reservationPeopleList);
  }

  useEffect(()=>{
    const startTime = {time: "5:30"}
    const endTime = {time: "22:30"}
    const reservationPeople = {people: 9}
    initTimeset(startTime,endTime)
    initPeopleSet(reservationPeople.people)
  },[])

  const handleTimeButtonClick = (index) => {
    setIsTimeIdx(index);
    const updatedTimes = [...moreTimes];
    updatedTimes[index].selected = !updatedTimes[index].selected;
    setMoreTimes(updatedTimes);
  };

  const handlePeopleButtonClick = (index) => {
    setIsHumanIdx(index);
    const updatedPeople = [...morePeople];
    updatedPeople[index].selected = !updatedPeople[index].selected;
    setMorePeople(updatedPeople);
  };

  return (
    <>
      <div className={styles.reservation_container}>
        <MiniStoreInfo />
        <div className={styles.reservation_main}>
          <Calendar
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            isPrevMonth={isPrevMonth}
            isNextMonth={isNextMonth}
          />
        </div>
        <div className={styles.reservation_main_time}>
          {/* 시간 슬라이드 */}
          <Swiper slidesPerView={6} navigation={false}>
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
        <div className={styles.reservation_main_person}>
          {/* 인원 슬라이드 */}
          <Swiper
            slidesPerView={7}
            spaceBetween={20}
            pagination={{ clickable: true }}
            className="mySwiper"
            navigation={false}
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
        <div className={styles.reservation_main_btn_container}>
          <BigOrangeButton
            value="WAITING"
            onClick={putData}
            content="예약 등록하기"
            onClickHandler={handleOpenReservation}
          />
        </div>
        <div className={styles.reservation_main_btn_container2}>
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
