import Calendar from "../../atoms/Calander";
import MiniStoreInfo from "../../blocks/MiniStoreInfo";
import SmallButton from "../../atoms/SmallButton";
import React, {useEffect, useState} from "react";
import RoundButton from "../../atoms/RoundButton";
import BigOrangeButton from "../../atoms/BigOrangeButton";
import BigWhiteButton from "../../atoms/BigWhiteButton";
import {useNavigate, useParams} from "react-router-dom";
import "../../../styles/pages/home/SwiperStyles.css";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import axios from "axios";
import {api} from "../../../common/api/ApiClient";

const Reservation = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [isPrevMonth, setIsPrevMonth] = useState(false);
  const [isNextMonth, setIsNextMonth] = useState(false);
  const [isTimeIdx, setIsTimeIdx] = useState('');
  const [isHumanIdx, setIsHumanIdx] = useState('');
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const {storeId}=useParams();
  const getData = async () => {
    const data = await api(`/api/v1/reservation/${storeId}`, "GET", {})
    setData(data);
  }
  const putData = async (e) => {
    const {value} = e.target;

    await api(`/api/v1/reservation/${storeId}/${value}`, "PUT", {})
  }


  const handleOpenReservation = () => {
    let formattedDate;

    if (selectedDay) {
      const year = selectedDay.getFullYear();
      const month = (selectedDay.getMonth() + 1).toString().padStart(2, "0");
      const day = selectedDay.getDate().toString().padStart(2, "0");
      formattedDate = `${year}-${month}-${day}`;
    }

    axios.post('http://localhost:8000/api/v1/reservation/f1a4d164-958e-4c1e-9b8b-51e43c4e06a', {
      reservationDay : formattedDate,
      reservationTime : formatTime(moreTimes[isTimeIdx].time),
      totalPeople : morePeople[isHumanIdx].people,
      customerId : "550e8400-e29b-41d4-a716-446655440000",
      customerName : "이세인",
      status : "WAITING"
    }).then((res) => {
      navigate(`/switch?day=${selectedDay}&time=${moreTimes[isTimeIdx].time}&people=${morePeople[isHumanIdx].people}`);
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


//   // 예약 상태를 나타내는 상태 변수
//   const [moreTimes, setMoreTimes] = useState([]);
//
//   function generateReservationTimes(openTime, closeTime, interval){
//     const times = [];
//     let reservationTimes = openTime;
//     while (1 <= 4) {
//       times.push({time: reservationTimes, selected: false})
//       // 예약 시간을 증가시킴
//       const [hours, minutes] = reservationTimes.split(":").map(Number);
//       const totalMinutes = hours * 60 + minutes + interval;
//       const newHours = Math.floor(totalMinutes / 60);
//       const newMinutes = totalMinutes % 60;
//
//       reservationTimes = `${String(newHours).padStart(2, "0")}:${String(newMinutes).padStart(2, "0")}`;
//     };
//     return times; // 상태 변경을 위한 반환 값
//   };
//
// // 예약 시간 생성 및 설정
//     const openTime = "8:00";
//     const closeTime = "22:00";
//     const interval = 30; // 분 단위 간격
//
// // generateReservationTimes 함수의 반환 값을 사용하여 상태를 설정
//   const generatedTimes = generateReservationTimes(openTime, closeTime, interval);
//   setMoreTimes(generatedTimes);

  const dateToString = (time) => Number(time.time.split(":")[1]) + (time.time.split(":")[0]==="30" ? 0.5 : 0)

  const initTimeset = (startTime,endTime)=>{

    const s = dateToString(startTime);
    const e = dateToString(endTime);

    const list = []
    for(let i= s; i <= e;  i += 0.5){
      const t = (i+"").split(".");
      const time = t[0] + t.length === 2?"?30":":00" ;
      list.push({ time, selected: false})
    }
    console.log(list)

  }
  useEffect(()=>{
    const startTime = {time: "5:30"}
    const endTime = {time: "22:30"}
    initTimeset(startTime,endTime)
  },[])
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
    { time: "6:00", selected: false }
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
    { people: 3, selected: false }
    // 여기에 더 많은 인원 버튼을 추가하세요
  ]);

  // 시간 버튼 클릭 핸들러
  const handleTimeButtonClick = (index) => {
    setIsTimeIdx(index);
    const updatedTimes = [...moreTimes];
    updatedTimes[index].selected = !updatedTimes[index].selected;
    setMoreTimes(updatedTimes);

  };

  // 인원 버튼 클릭 핸들러
  const handlePeopleButtonClick = (index) => {
    setIsHumanIdx(index);
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
          <BigOrangeButton value="WAITING" onClick={putData}
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
