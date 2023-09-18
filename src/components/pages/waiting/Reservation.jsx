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
    const { value } = e.target;

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

    axios
      .post(
        "http://localhost:8000/api/v1/reservation/f1a4d164-958e-4c1e-9b8b-51e43c4e06a",
        {
          reservationDay: formattedDate,
          reservationTime: formatTime(moreTimes[isTimeIdx].time),
          totalPeople: morePeople[isHumanIdx].people,
          customerId: "550e8400-e29b-41d4-a716-446655440000",
          customerName: "이세인",
          status: "WAITING",
        }
      )
      .then((res) => {
        navigate(
          `/switch?day=${selectedDay}&time=${moreTimes[isTimeIdx].time}&people=${morePeople[isHumanIdx].people}`
        );
      })
      .catch((err) => {
        console.log(err);
      });
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

  const initTimeset = (startTime, endTime) => {
    const s = dateToString(startTime);
    const e = dateToString(endTime);

    const list = [];
    for (let i = s; i <= e; i += 0.5) {
      const hours = Math.floor(i);
      const minutes = i % 1 === 0.5 ? "30" : "00"; // 0.5인 경우 "30", 그렇지 않으면 "00"
      const time = `${hours}:${minutes}`;
      list.push({ time, selected: true });
    }
    return list;
  };

  useEffect(() => {
    const startTime = { time: "5:30" };
    const endTime = { time: "22:30" };
    const generatedTimes = initTimeset(startTime, endTime);
    setMoreTimes(generatedTimes);
  }, []);

  const [moreTimes, setMoreTimes] = useState([
    { time: "5:30", selected: false },
    { time: "6:00", selected: false },
    { time: "6:30", selected: false },
    { time: "7:00", selected: false },
    { time: "7:30", selected: false },
    { time: "8:00", selected: false },
    { time: "8:30", selected: false },
    { time: "9:00", selected: false },
    { time: "7:00", selected: false },
    { time: "7:00", selected: false },
    { time: "7:00", selected: false },
  ]);
  const [morePeople, setMorePeople] = useState([
    { people: 1, selected: false },
    { people: 2, selected: false },
    { people: 3, selected: false },
    { people: 4, selected: false },
    { people: 5, selected: false },
    { people: 6, selected: false },
    { people: 7, selected: false },
    { people: 8, selected: false },
    { people: 9, selected: false },
    { people: 10, selected: false },
    { people: 11, selected: false },
    { people: 12, selected: false },
  ]);

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
