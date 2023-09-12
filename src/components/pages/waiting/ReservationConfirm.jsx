import styles from "../../../styles/pages/waiting/ReservationConfirm.css";
import BigWhiteButton from "../../atoms/BigWhiteButton";
import Calendar from "../../atoms/Calander";
import RoundButton from "../../atoms/RoundButton";
import SmallButton from "../../atoms/SmallButton";
import MiniStoreInfo from "../../blocks/MiniStoreInfo";
const ReservationConfirm = () => {
  return (
    <>
      <div className="reservation_confirm_container">
        <MiniStoreInfo />
        <div className="reservation_confirm_head_content">
          <span className="reservation_confirm_font">예약 날짜 : </span>
          <span className="reservation_confirm_font"> 2023년 9월 12일</span>
        </div>
        <div className="reservation_confirm_main">
          <Calendar />
        </div>
        <div className="reservation_confirm_btn">
          <SmallButton content="5:30"></SmallButton>
        </div>
        <div className="reservation_confirm_btn">
          <RoundButton content="4명 " />
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
          <BigWhiteButton content="웨이팅취소"></BigWhiteButton>
        </div>
      </div>
    </>
  );
};

export default ReservationConfirm;
