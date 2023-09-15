import MiniStoreInfo from "../../blocks/MiniStoreInfo";
import BigWhiteButton from "../../atoms/BigWhiteButton";
import styles from "../../../styles/pages/waiting/CheckMain.css";
import { useNavigate } from "react-router-dom";
import classes from "../../../styles/pages/my/Myprofile.module.css";
import reviewTabClasses from "../../../styles/pages/my/MyprofileReviewTab.module.css";
import React, { useState } from "react";
const WaitingCheck = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    console.log("BigWhiteButton clicked");
    navigate(-1); // 혹은 다른 작업 수행
  };
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
      </div>
    </>
  );
};

export default WaitingCheck;
