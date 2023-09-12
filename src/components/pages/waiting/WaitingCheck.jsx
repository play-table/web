import MiniStoreInfo from "../../blocks/MiniStoreInfo";
import BigWhiteButton from "../../atoms/BigWhiteButton";
import styles from "../../../styles/pages/waiting/CheckMain.css";

const WaitingCheck = () => {
  return (
    <>
      <div className="waiting_check_container">
        <MiniStoreInfo />
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
          <BigWhiteButton content="웨이팅 취소"></BigWhiteButton>
        </div>
      </div>
    </>
  );
};

export default WaitingCheck;
