import React, { useState } from "react";
import Menu from "../Layout/menubar/Menubar";
import classes from "../../../styles/pages/my/Myprofile.module.css";
import reviewTabClasses from "../../../styles/pages/my/MyprofileReviewTab.module.css";
import {
  AiFillInstagram,
  AiOutlineCalendar,
  AiOutlineCloseCircle,
  AiOutlineDownCircle,
  AiOutlineEdit,
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const My = () => {
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

  const goToStoreReview = (store) => {
    nav(`/review?store=${store}`);
  };

  const goToReviewInput = (store) => {
    nav(`/review/input?store=${store}`);
  };

  const goToEdit = () => {
    nav("/edit");
  };

  return (
    <>
      <div className={classes.my_wrap}>
        <div className="my_container">
          <header className="header">
            <h1>마이페이지</h1>
            <div onClick={goToEdit}>
              <svg
                width="21"
                height="23"
                viewBox="0 0 21 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.3164 7.59425C8.24528 7.59425 6.56635 9.27319 6.56635 11.3443C6.56635 13.4153 8.24528 15.0943 10.3164 15.0943C12.3874 15.0943 14.0664 13.4153 14.0664 11.3443C14.0664 9.27319 12.3874 7.59425 10.3164 7.59425ZM8.06635 11.3443C8.06635 10.1016 9.07371 9.09425 10.3164 9.09425C11.559 9.09425 12.5664 10.1016 12.5664 11.3443C12.5664 12.5869 11.559 13.5943 10.3164 13.5943C9.07371 13.5943 8.06635 12.5869 8.06635 11.3443Z"
                  fill="#2D264B"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.7311 2.57654C12.7507 -0.858846 7.88205 -0.858845 6.90164 2.57654C6.59787 3.64094 5.50433 4.2723 4.43064 4.00317C0.965307 3.13454 -1.46899 7.35087 1.01593 9.91763C1.78584 10.7129 1.78584 11.9756 1.01593 12.7709C-1.46899 15.3376 0.965308 19.554 4.43064 18.6853C5.50433 18.4162 6.59787 19.0476 6.90164 20.112C7.88205 23.5474 12.7507 23.5474 13.7311 20.112C14.0348 19.0476 15.1284 18.4162 16.2021 18.6853C19.6674 19.554 22.1017 15.3376 19.6168 12.7709C18.8469 11.9756 18.8469 10.7129 19.6168 9.91763C22.1017 7.35087 19.6674 3.13454 16.2021 4.00317C15.1284 4.2723 14.0348 3.64094 13.7311 2.57654ZM8.34405 2.98818C8.91032 1.00394 11.7224 1.00394 12.2887 2.98818C12.8146 4.83102 14.7079 5.92411 16.5668 5.45815C18.5683 4.95644 19.9743 7.39175 18.5391 8.87428C17.2061 10.2512 17.2061 12.4373 18.5391 13.8142C19.9743 15.2968 18.5683 17.7321 16.5668 17.2304C14.7079 16.7644 12.8146 17.8575 12.2887 19.7003C11.7224 21.6846 8.91033 21.6846 8.34405 19.7003C7.81813 17.8575 5.92484 16.7644 4.06593 17.2304C2.06439 17.7321 0.658361 15.2968 2.09363 13.8142C3.42661 12.4373 3.42661 10.2512 2.09363 8.87428C0.658362 7.39175 2.06439 4.95644 4.06593 5.45815C5.92484 5.92411 7.81813 4.83102 8.34405 2.98818Z"
                  fill="#2D264B"
                />
              </svg>
            </div>
          </header>
          <div className="my_mypage_profile_container">
            <div className={classes.mypage}>
              <AiOutlineUser size="80px" style={{ padding: "15px" }} />
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
                  <p>리뷰</p>
                </div>
              </div>

              {switchMenu && (
                <div className={classes.reservation_list_wrap}>
                  <div className={classes.reservation_list}>
                    <div className={classes.reservation_list_num}>
                      <p>1</p>
                    </div>

                    <div>
                      <div
                        className={classes.reservation_list_store}
                        onClick={() => goToStoreReview("무탄")}
                      >
                        <img
                          className={classes.store_img}
                          src="https://image.toast.com/aaaaaqx/catchtable/shopinfo/s1048/1048_2112418283224885.jpg?detail750"
                        />
                        <div className={classes.reservation_list_store_detail}>
                          <p style={{ fontWeight: "bold" }}>무탄</p>
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
                    <button
                      className={classes.reveiw_button}
                      onClick={() => goToReviewInput("무탄")}
                    >
                      리뷰쓰기
                    </button>
                  </div>
                  <div className={classes.reservation_list}>
                    <div className={classes.reservation_list_num}>
                      <p>1</p>
                    </div>

                    <div>
                      <div
                        className={classes.reservation_list_store}
                        onClick={() => goToStoreReview("무탄")}
                      >
                        <img
                          className={classes.store_img}
                          src="https://image.toast.com/aaaaaqx/catchtable/shopinfo/s1048/1048_2112418283224885.jpg?detail750"
                        />
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
                    <button
                      className={classes.reveiw_button}
                      onClick={() => goToReviewInput("무탄")}
                    >
                      리뷰쓰기
                    </button>
                  </div>
                </div>
              )}
              {!switchMenu && (
                <div className={reviewTabClasses.review_list_wrap}>
                  <div className={reviewTabClasses.review_list}>
                    <div className={classes.reservation_list_store}>
                      <img
                        className={classes.store_img}
                        src="https://image.toast.com/aaaaaqx/catchtable/shopinfo/s1048/1048_2112418283224885.jpg?detail750"
                      />
                      <div className={classes.reservation_list_store_detail}>
                        <p
                          style={{ fontWeight: "bold" }}
                          onClick={() => goToStoreReview("무탄")}
                        >
                          무탄
                        </p>
                        <p>일식:경주</p>
                      </div>
                    </div>

                    <div>
                      <div className={reviewTabClasses.review_detail}>
                        <div className={reviewTabClasses.star}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="11"
                            viewBox="0 0 12 11"
                            fill="none"
                          >
                            <path
                              id="Vector"
                              d="M7.854 3.6204L6 0L4.146 3.6204L0 4.20452L3 7.02103L2.292 11L6 9.1204L9.708 11L9 7.02103L12 4.20452L7.854 3.6204Z"
                              fill="#F9B32C"
                            />
                          </svg>
                          <div>4.3</div>
                        </div>

                        <div>
                          <p>2023.09.02</p>
                        </div>
                      </div>

                      <div className={reviewTabClasses.review_card_img}>
                        <img
                          src="https://ugc-images.catchtable.co.kr/rv/szyLDwR3vBm0V85je79tbGw/eef6ba299a58427687ca254c601d6849?small220"
                          alt=""
                        />
                        <img
                          src="https://ugc-images.catchtable.co.kr/rv/szyLDwR3vBm0V85je79tbGw/eef6ba299a58427687ca254c601d6849?small220"
                          alt=""
                        />
                        <img
                          src="https://ugc-images.catchtable.co.kr/rv/szyLDwR3vBm0V85je79tbGw/eef6ba299a58427687ca254c601d6849?small220"
                          alt=""
                        />
                      </div>
                      <div>
                        <p>
                          매우 맛있음~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={reviewTabClasses.review_list}>
                    <div className={classes.reservation_list_store}>
                      <img
                        className={classes.store_img}
                        src="https://image.toast.com/aaaaaqx/catchtable/shopinfo/s1048/1048_2112418283224885.jpg?detail750"
                      />
                      <div className={classes.reservation_list_store_detail}>
                        <p style={{ fontWeight: "bold" }}>무탄</p>
                        <p>일식:경주</p>
                      </div>
                    </div>

                    <div>
                      <div className={reviewTabClasses.review_detail}>
                        <div className={reviewTabClasses.star}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="11"
                            viewBox="0 0 12 11"
                            fill="none"
                          >
                            <path
                              id="Vector"
                              d="M7.854 3.6204L6 0L4.146 3.6204L0 4.20452L3 7.02103L2.292 11L6 9.1204L9.708 11L9 7.02103L12 4.20452L7.854 3.6204Z"
                              fill="#F9B32C"
                            />
                          </svg>
                          <div>4.3</div>
                        </div>

                        <div>
                          <p>2023.09.02</p>
                        </div>
                      </div>

                      <div className={reviewTabClasses.review_card_img}>
                        <img
                          src="https://ugc-images.catchtable.co.kr/rv/szyLDwR3vBm0V85je79tbGw/eef6ba299a58427687ca254c601d6849?small220"
                          alt=""
                        />
                        <img
                          src="https://ugc-images.catchtable.co.kr/rv/szyLDwR3vBm0V85je79tbGw/eef6ba299a58427687ca254c601d6849?small220"
                          alt=""
                        />
                        <img
                          src="https://ugc-images.catchtable.co.kr/rv/szyLDwR3vBm0V85je79tbGw/eef6ba299a58427687ca254c601d6849?small220"
                          alt=""
                        />
                      </div>
                      <div>
                        <p>
                          매우 맛있음~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Menu />
    </>
  );
};

export default My;
