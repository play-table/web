import React, {useState} from 'react';
import Menu from '../Layout/menubar/Menubar';
import classes from '../../../styles/pages/my/Myprofile.module.css';
import reviewTabClasses from '../../../styles/pages/my/MyprofileReviewTab.module.css';
import {
    AiFillInstagram,
    AiOutlineCalendar,
    AiOutlineEdit,
    AiOutlineHome,
    AiOutlineSearch,
    AiOutlineUser
} from "react-icons/ai";
import {useNavigate} from "react-router-dom";


const My = () => {
    const nav = useNavigate();
    const [switchMenu, setSwitchMenu] = useState(true);
    const [error, setError] = useState('');


    const menuSwitch = (data) => {

        if (data == 'res') {
            setSwitchMenu(true)
            setError('')
        } else {
            setSwitchMenu(false)
            setError('')
        }
    };

    const goToStoreReview = (store) => {
        nav(`/review?store=${store}`);
    }


  return (
      <>
          <div className={classes.my_wrap}>
              <div className="my_container">
                  <header id="header">
                      <h1>마이페이지</h1>
                  </header>
                  <div className="my_mypage_profile_container">
                      <div className={classes.mypage} >
                          <AiOutlineUser size="80px" style={{padding: "15px"}} />
                          <p>발랄한 맛사냥꾼</p>
                      </div>

                      <div className={classes.select_tab}>
                          <div className={classes.reservation_tab}>
                              <p>예약</p>
                              <p>4건</p>
                          </div>

                          <div className={classes.review_tab}>
                              <p>리뷰</p>
                              <p>4건</p>
                          </div>

                          <div className={classes.cancel_tab}>
                              <p>취소/노쇼</p>
                              <p>4건</p>
                          </div>
                      </div>

                      <div>
                          <div className={classes.veiw_container}>
                              <div style={{borderBottom : switchMenu ? '1px solid #F9B32C' : '', cursor : "pointer"}} onClick={() => {menuSwitch('res')}}><p>예약</p></div>
                              <div style={{borderBottom : switchMenu ? '' : '1px solid #F9B32C', cursor : "pointer"}} onClick={() => {menuSwitch('rev')}}><p>리뷰</p></div>
                          </div>

                          {switchMenu &&
                              <div className={classes.reservation_list_wrap}>
                                  <div className={classes.reservation_list}>
                                      <div className={classes.reservation_list_num}><p>1</p></div>

                                      <div>
                                          <div className={classes.reservation_list_store}>
                                              <img className={classes.store_img} src="https://image.toast.com/aaaaaqx/catchtable/shopinfo/s1048/1048_2112418283224885.jpg?detail750"/>
                                              <div className={classes.reservation_list_store_detail}>
                                                  <p style={{fontWeight: 'bold'}}>무탄</p>
                                                  <p >일식:경주</p>
                                              </div>
                                          </div>
                                          <div className={classes.reservation_list_store_contents}>
                                              <p>예약 날짜 : 2023년 9월 3일</p>
                                              <p>예약 시간 : 오후 5:00</p>
                                              <p>예약 인원 : 4명</p>
                                              <p>예약 확인 : 승인</p>
                                          </div>
                                      </div>
                                      <button className={classes.reveiw_button}>리뷰쓰기</button>
                                  </div>
                                  <div className={classes.reservation_list}>
                                  <div className={classes.reservation_list_num}><p>1</p></div>

                                  <div>
                                      <div className={classes.reservation_list_store}>
                                          <img className={classes.store_img} src="https://image.toast.com/aaaaaqx/catchtable/shopinfo/s1048/1048_2112418283224885.jpg?detail750"/>
                                          <div>
                                              <p>무탄</p>
                                              <p>일식:경주</p>
                                          </div>
                                      </div>
                                      <div className={classes.reservation_list_store_contents}>
                                          <p>예약 날짜 : 2023년 9월 3일</p>
                                          <p>예약 시간 : 오후 5:00</p>
                                          <p>예약 인원 : 4명</p>
                                          <p>예약 확인 : 승인</p>
                                      </div>
                                  </div>
                                  <button className={classes.reveiw_button}>리뷰쓰기</button>
                              </div>
                              </div>
                          }
                          {!switchMenu &&
                              <div className={reviewTabClasses.review_list_wrap}>
                                  <div className={reviewTabClasses.review_list}>
                                      <div className={classes.reservation_list_store}>
                                          <img className={classes.store_img} src="https://image.toast.com/aaaaaqx/catchtable/shopinfo/s1048/1048_2112418283224885.jpg?detail750"/>
                                          <div className={classes.reservation_list_store_detail}>
                                              <p style={{fontWeight: 'bold'}} onClick={() => goToStoreReview("무탄")}>무탄</p>
                                              <p >일식:경주</p>
                                          </div>
                                  </div>

                                  <div>
                                      <div className={reviewTabClasses.review_detail}>
                                          <div className={reviewTabClasses.star}>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                                                  <path id="Vector" d="M7.854 3.6204L6 0L4.146 3.6204L0 4.20452L3 7.02103L2.292 11L6 9.1204L9.708 11L9 7.02103L12 4.20452L7.854 3.6204Z" fill="#F9B32C"/>
                                              </svg>
                                              <div>4.3</div>
                                          </div>

                                          <div>
                                              <p>2023.09.02</p>
                                          </div>
                                      </div>

                                      <div className={reviewTabClasses.review_card_img}>
                                          <img src="https://ugc-images.catchtable.co.kr/rv/szyLDwR3vBm0V85je79tbGw/eef6ba299a58427687ca254c601d6849?small220" alt=""/>
                                          <img src="https://ugc-images.catchtable.co.kr/rv/szyLDwR3vBm0V85je79tbGw/eef6ba299a58427687ca254c601d6849?small220" alt=""/>
                                          <img src="https://ugc-images.catchtable.co.kr/rv/szyLDwR3vBm0V85je79tbGw/eef6ba299a58427687ca254c601d6849?small220" alt=""/>
                                      </div>
                                      <div>
                                          <p>매우 맛있음~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                              ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

                                              ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                              ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</p>
                                      </div>


                                  </div>



                                  </div>
                                  <div className={reviewTabClasses.review_list}>
                                      <div className={classes.reservation_list_store}>
                                          <img className={classes.store_img} src="https://image.toast.com/aaaaaqx/catchtable/shopinfo/s1048/1048_2112418283224885.jpg?detail750"/>
                                          <div className={classes.reservation_list_store_detail}>
                                              <p style={{fontWeight: 'bold'}}>무탄</p>
                                              <p >일식:경주</p>
                                          </div>
                                      </div>

                                      <div>
                                          <div className={reviewTabClasses.review_detail}>
                                              <div className={reviewTabClasses.star}>
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                                                      <path id="Vector" d="M7.854 3.6204L6 0L4.146 3.6204L0 4.20452L3 7.02103L2.292 11L6 9.1204L9.708 11L9 7.02103L12 4.20452L7.854 3.6204Z" fill="#F9B32C"/>
                                                  </svg>
                                                  <div>4.3</div>
                                              </div>

                                              <div>
                                                  <p>2023.09.02</p>
                                              </div>
                                          </div>

                                          <div className={reviewTabClasses.review_card_img}>
                                              <img src="https://ugc-images.catchtable.co.kr/rv/szyLDwR3vBm0V85je79tbGw/eef6ba299a58427687ca254c601d6849?small220" alt=""/>
                                              <img src="https://ugc-images.catchtable.co.kr/rv/szyLDwR3vBm0V85je79tbGw/eef6ba299a58427687ca254c601d6849?small220" alt=""/>
                                              <img src="https://ugc-images.catchtable.co.kr/rv/szyLDwR3vBm0V85je79tbGw/eef6ba299a58427687ca254c601d6849?small220" alt=""/>
                                          </div>
                                          <div>
                                              <p>매우 맛있음~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

                                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</p>
                                          </div>


                                      </div>



                                  </div>

                              </div>
                          }


                      </div>
                  </div>
              </div>
          </div>
          <Menu />
      </>
  );
};

export default My;
