import React, { useRef, useState } from "react";
import reviewClasses from "../../../styles/pages/review/Reivew.module.css";
import classes from "../../../styles/pages/my/Myprofile.module.css";
import reviewInputClasses from "../../../styles/pages/review/ReviewInput.module.css";
import { Rating } from "react-simple-star-rating";
import { api } from "../../../common/api/ApiClient";
import { useParams } from "react-router-dom";

const ReviewInput = () => {
  const [selectedImages1, setSelectedImages1] = useState([]);
  const [selectedImages2, setSelectedImages2] = useState([]);

  const fileInputRef1 = useRef(null);
  const fileInputRef2 = useRef(null);
  const [rating, setRating] = useState(0);
  const [ratingValueText, setRatingValueText] = useState("0");
  const [reviewText, setReviewText] = useState("");
  const [storeId] = useParams();

  const handleImageUpload = (e, setSelectedImages) => {
    try {
      const files = e.target.files;
      const imageArray = [];

      // 선택한 파일을 배열에 추가
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        imageArray.push(file);
      }

      setSelectedImages(imageArray);
    } catch (error) {
      console.error("이미지 업로드 오류", error);
    }
  };

  const postData = async () => {
    try {
      // 서버로 리뷰 데이터 전송
      const response = await api(`/api/v1/reviews`, "POST", {
        storeId: "storeId", // storeId를 사용
        content: reviewText,
        rating: rating, // 평점 추가
        imgUrl: "asdsads", // 이미지 업로드 로직 필요
      });

      // 리뷰 작성 후 필요한 작업을 수행합니다.
      console.log("리뷰 작성 완료", response);
    } catch (error) {
      console.error("API 호출 오류", error);
    }
  };

  const handleRating = (rate) => {
    setRating(rate);
    setRatingValueText(rate.toString());
  };

  const handleReviewTextChange = (e) => {
    setReviewText(e.target.value);
  };

  return (
    <div className={reviewInputClasses.review_input_wrap}>
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

      <div className={reviewInputClasses.rating}>
        <div className={reviewInputClasses.star_rating}>
          <Rating
            onClick={handleRating}
            ratingValue={rating}
            /* Available Props */
          />
          <div className={reviewInputClasses.rating_value}>
            <p className={reviewInputClasses.rating_text}>
              평점 : {ratingValueText}
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className={reviewInputClasses.input_section}>
          <div className={reviewInputClasses.input_title}>리뷰</div>
          <p>
            <textarea
              rows="5"
              className={reviewInputClasses.input_contents}
              placeholder={"리뷰를 작성해주세요."}
              value={reviewText}
              onChange={handleReviewTextChange}
            />
          </p>
        </div>

        <div>
          <div className={reviewInputClasses.input_title}>사진</div>
          <div className={reviewInputClasses.input_picture_section}>
            <div className={reviewInputClasses.input_picture}>
              {" "}
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, setSelectedImages1)}
                ref={fileInputRef1} // 수정 필요
                style={{ display: "none" }}
              />
              <button
                className={reviewInputClasses.input_picture_button}
                onClick={() => fileInputRef1.current.click()}
              >
                사진 업로드
              </button>
              {selectedImages1.map((image, index) => (
                <div key={index} className={reviewInputClasses.input_picture}>
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`Image ${index}`}
                    width={100}
                    height={100}
                  />
                </div>
              ))}
            </div>
            <div className={reviewInputClasses.input_picture}>
              {" "}
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, setSelectedImages2)}
                ref={fileInputRef2}
                style={{ display: "none" }}
              />
              <button
                className={reviewInputClasses.input_picture_button}
                onClick={() => fileInputRef2.current.click()}
              >
                사진 업로드
              </button>
              {selectedImages2.map((image, index) => (
                <div key={index} className={reviewInputClasses.input_picture}>
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`Image ${index}`}
                    width={100}
                    height={100}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={reviewInputClasses.button_review_input_line}>
          <button
            className={reviewInputClasses.button_review_input}
            onClick={postData}
          >
            리뷰작성
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewInput;
