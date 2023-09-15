import MiniStoreInfo from "../../blocks/MiniStoreInfo";
import BigWhiteButton from "../../atoms/BigWhiteButton";
import styles from "../../../styles/pages/waiting/CheckMain.css";
import axios from "axios";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const WaitingCheck = () => {
  const [data, setData] = useState([]);
  const { storeId } = useParams();
  useEffect(()=>{
    getData()
  },[]);
  const putData = () => {
      axios.put(`http://localhost:8000/api/v1/waiting/` + storeId+`/`+"customer_cancel")
          .then((res) => {
          }).catch((err) => {
            console.log(err)
      })
  }
    const getData = () =>
        axios
            .get(`http://localhost:8000/api/v1/waiting/id/` + storeId)
            .then((response) => {
                setData(response.data);
                console.log(response.data);
            });

  return (
    <>
      <div className="waiting_check_container">
        <MiniStoreInfo />
        <div className="waiting_check_main">
          <span className="waiting_check_main_font">내 웨이팅 번호</span>
        </div>
        <div className="waiting_check_main2">
          <span className="waiting_check_sub_font">{data}번</span>
        </div>
        <div className="waiting_check_main2">
          <p className="waiting_check_sub_font2">현재 대기중인 팀 : {data-1}팀</p>
        </div>
        <div className="waiting_check_sub"onClick={putData} >
          <BigWhiteButton content="웨이팅 취소"  />
        </div>
      </div>
    </>
  );
};

export default WaitingCheck;
