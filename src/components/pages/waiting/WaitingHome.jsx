import styles from "../../../styles/pages/waiting/WaitingHome.css";
import MiniStoreInfo from "../../blocks/MiniStoreInfo";
import BigOrangeButton from "../../atoms/BigOrangeButton";
import BigWhiteButton from "../../atoms/BigWhiteButton";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";

const WaitingHome = () => {
  const navigate = useNavigate();

  const handleOpenWaitingCheck = () => {
    navigate("/waiting-check");
  };
  const [data, setData] = useState([]);
  useEffect(()=>{
    getData()
  },[]);
  const { storeId } = useParams();
  const getData = () =>
      axios
          .get(`http://localhost:8000/api/v1/waiting/id/` + storeId)
          .then((response) => {
            setData(response.data);
            console.log(response.data);
          });

  return (
    <>
      <div className={styles.waiting_container}>
        <MiniStoreInfo />
        <div className="waiting_main">
          <div className="waiting_main_font">현재 대기중인 팀</div>
        </div>
        <div className="waiting_main">
          <span className="waiting_sub_font">{data-1}팀</span>
        </div>
        <div className="waiting_middle">
          <div className="waiting_main_font">성인</div>
          <div className="waiting_main_font">- 4 +</div>
        </div>
        <div className="waiting_middle">
          <span className="waiting_main_font">유아</span>
          <span className="waiting_main_font">- 0 +</span>
        </div>
        <div className="waiting_main">
          <span className="waiting_main_font">
            {" "}
            총방문인원 :<span className="waiting_sub_font"> 4명</span>
          </span>
        </div>
        <div className="waiting_main">
          <BigOrangeButton
            content="웨이팅 등록하기"
            onClick={handleOpenWaitingCheck}
          ></BigOrangeButton>
          <div className="waiting_sub">
            <BigWhiteButton content="닫기"></BigWhiteButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default WaitingHome;
