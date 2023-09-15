import React, { useEffect, useState } from "react";
import reviewClasses from "../../../styles/pages/review/Reivew.module.css";
import classes from "../../../styles/pages/my/Myprofile.module.css";
import reviewTabClasses from "../../../styles/pages/my/MyprofileReviewTab.module.css";
import { AiOutlineUser } from "react-icons/ai";
import Slide from "./Slide";
import { useParams } from "react-router-dom";
import axios from "axios";

const Review = () => {
  const param = useParams();
  console.log(param);
  useEffect(() => {
    getData();
  }, [param]);
  const [reviews, setReviews] = useState([]);
  const getData = async () => {
    const { data } = await axios.get(
      `http://localhost:8000/api/v1/reviews/${param.storeId}`
    );
    setReviews(data);
    console.log(data);
  };
  const [imgs, setImgs] = useState([
    {
      el: (
        <img
          src="https://ugc-images.catchtable.co.kr/rv/szyLDwR3vBm0V85je79tbGw/eef6ba299a58427687ca254c601d6849?small220"
          alt=""
        />
      ),
    },
    {
      el: (
        <img
          src="https://ugc-images.catchtable.co.kr/rv/szyLDwR3vBm0V85je79tbGw/eef6ba299a58427687ca254c601d6849?small220"
          alt=""
        />
      ),
    },
    {
      el: (
        <img
          src="https://ugc-images.catchtable.co.kr/rv/szyLDwR3vBm0V85je79tbGw/eef6ba299a58427687ca254c601d6849?small220"
          alt=""
        />
      ),
    },
    {
      el: (
        <img
          src="https://ugc-images.catchtable.co.kr/rv/szyLDwR3vBm0V85je79tbGw/eef6ba299a58427687ca254c601d6849?small220"
          alt=""
        />
      ),
    },
    {
      el: (
        <img
          src="https://ugc-images.catchtable.co.kr/rv/szyLDwR3vBm0V85je79tbGw/eef6ba299a58427687ca254c601d6849?small220"
          alt=""
        />
      ),
    },
    {
      el: (
        <img
          src="https://ugc-images.catchtable.co.kr/rv/szyLDwR3vBm0V85je79tbGw/eef6ba299a58427687ca254c601d6849?small220"
          alt=""
        />
      ),
    },
    {
      el: (
        <img
          src="https://ugc-images.catchtable.co.kr/rv/szyLDwR3vBm0V85je79tbGw/eef6ba299a58427687ca254c601d6849?small220"
          alt=""
        />
      ),
    },
    {
      el: (
        <img
          src="https://ugc-images.catchtable.co.kr/rv/szyLDwR3vBm0V85je79tbGw/eef6ba299a58427687ca254c601d6849?small220"
          alt=""
        />
      ),
    },
    {
      el: (
        <img
          src="https://ugc-images.catchtable.co.kr/rv/szyLDwR3vBm0V85je79tbGw/eef6ba299a58427687ca254c601d6849?small220"
          alt=""
        />
      ),
    },
    {
      el: (
        <img
          src="https://ugc-images.catchtable.co.kr/rv/szyLDwR3vBm0V85je79tbGw/eef6ba299a58427687ca254c601d6849?small220"
          alt=""
        />
      ),
    },
  ]);

  return (
    <div className={reviewClasses.review_wrap}>
      <div className={reviewClasses.store_title}>
        <img
          className={classes.store_img}
          src="https://image.toast.com/aaaaaqx/catchtable/shopinfo/s1048/1048_2112418283224885.jpg?detail750"
        />
        <div className={classes.reservation_list_store_detail}>
          <p style={{ fontWeight: "bold" }}>무탄</p>
          <p>일식:경주</p>
        </div>
      </div>

      <div className={reviewClasses.store_review_list}>
        <div className={reviewClasses.review_write_user}>
          <AiOutlineUser size="40px" style={{ padding: "2px" }} />
          <p>발랄한 맛사냥꾼</p>
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
            <Slide data={imgs} />
          </div>
          <div>
            <p>매우 맛있음~~~~~~~~~~~~~~</p>
          </div>
        </div>
      </div>
      <div className={reviewClasses.store_review_list}>
        <div className={reviewClasses.review_write_user}>
          <AiOutlineUser size="40px" style={{ padding: "2px" }} />
          <p>리뷰킬러</p>
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
              <div>3.5</div>
            </div>

            <div>
              <p>2023.09.11</p>
            </div>
          </div>

          <div className={reviewTabClasses.review_card_img}>
            <Slide data={imgs} />
          </div>
          <div>
            <p>매우 맛있음</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
