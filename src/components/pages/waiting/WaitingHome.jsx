import styles from "../../../styles/pages/waiting/WaitingHome.module.css";
import MiniStoreInfo from "../../blocks/MiniStoreInfo";
import BigOrangeButton from "../../atoms/BigOrangeButton";
import BigWhiteButton from "../../atoms/BigWhiteButton";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {api} from "../../../common/api/ApiClient";

const WaitingHome = () => {
  const [count, setCount] = useState({
    kid:0,
    adult:0,
    status:"WAITING",
  });
  const onChangeCount = (name, value)=>{
    setCount({...count,[name]:count[name]+value})
  }
  // onChangeCount("kid",-1)

  const navigate = useNavigate();

  const redirect = () => {
    navigate(`/waiting/${storeId}/check`);
  };
  const handleButtonClick = () => {
    console.log("BigWhiteButton clicked");
    navigate(-1); // 혹은 다른 작업 수행
  };
  const [data, setData] = useState([]);
  useEffect(()=>{
    getData()
  },[]);
  const { storeId } = useParams();
  const getData = async () => {
    const data = await api(`/api/v1/waiting/${storeId}`, "GET", {})
    setData(data);
  }

  const postData = async (e) => {
    const {value} = e.target
    await api(`/api/v1/waiting/${storeId}`, "POST", count)
    redirect();
  }

      // axios
      //     .get(`/api/v1/waiting/id/` + storeId)
      //     .then((response) => {
      //       setData(response.data);
      //       console.log(response.data);
      //     });

  return (
    <>
      <div className={styles.waiting_container}>
        <MiniStoreInfo />
        <div className={styles.waiting_main}>
          <div className={styles.waiting_main_font}>현재 대기중인 팀</div>
        </div>
        <div className={styles.waiting_main}>
          <span className={styles.waiting_sub_font}>{data}팀</span>
        </div>
        <div className={styles.waiting_middle}>
          <div className={styles.waiting_main_font}>성인</div>
          <div className={styles.waiting_main_font}>
            <button onClick={()=>onChangeCount("adult",-1)}>-</button>
            {count.adult}
            <button onClick={()=>onChangeCount("adult",+1)}>+</button>
          </div>
        </div>
        <div className={styles.waiting_middle}>
          <span className={styles.waiting_main_font}>유아</span>
          <span className={styles.waiting_main_font}>
            <button onClick={()=>onChangeCount("kid",-1)}>-</button>
            {count.kid}
            <button onClick={()=>onChangeCount("kid",+1)}>+</button>
          </span>
        </div>
        <div className={styles.waiting_main}>
          <span className={styles.waiting_main_font}>
            {" "}
            총방문인원 :<span className={styles.waiting_sub_font}> {count.adult+count.kid}명</span>
          </span>
        </div>
        <div className={styles.waiting_main}>
          <BigOrangeButton
            content="웨이팅 등록하기"
            value="WAITING"
            onClickHandler={postData}
          ></BigOrangeButton>
          <div className={styles.waiting_sub}>
            <BigWhiteButton
              content="닫기"
              onClickHandler={handleButtonClick}
            ></BigWhiteButton>
            {/*<button value="CUSTOMER_CANCEL" onClick={putData}>취소버튼</button>*/}
            {/*<button value="OWNER_CANCEL" onClick={putData}>취소버튼</button>*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default WaitingHome;
