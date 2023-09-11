import React from 'react';
import reviewClasses from "../../../styles/pages/review/Reivew.module.css";
import classes from "../../../styles/pages/my/Myprofile.module.css";
import reviewInputClasses from "../../../styles/pages/review/ReviewInput.module.css";

const ReviewInput = () => {
    return (
        <div className={reviewInputClasses.review_input_wrap}>

            <div className={reviewClasses.store_title}>
                <img className={classes.store_img} src="https://image.toast.com/aaaaaqx/catchtable/shopinfo/s1048/1048_2112418283224885.jpg?detail750"/>
                <div className={classes.reservation_list_store_detail}>
                    <p style={{fontWeight: 'bold'}}>무탄</p>
                    <p >일식:경주</p>
                </div>
            </div>

            <div className={reviewInputClasses.rating}>
                <div className={reviewInputClasses.star_rating}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 12 11" fill="none">
                        <path id="Vector" d="M7.854 3.6204L6 0L4.146 3.6204L0 4.20452L3 7.02103L2.292 11L6 9.1204L9.708 11L9 7.02103L12 4.20452L7.854 3.6204Z" fill="#F9B32C"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 12 11" fill="none">
                        <path id="Vector" d="M7.854 3.6204L6 0L4.146 3.6204L0 4.20452L3 7.02103L2.292 11L6 9.1204L9.708 11L9 7.02103L12 4.20452L7.854 3.6204Z" fill="#F9B32C"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 12 11" fill="none">
                        <path id="Vector" d="M7.854 3.6204L6 0L4.146 3.6204L0 4.20452L3 7.02103L2.292 11L6 9.1204L9.708 11L9 7.02103L12 4.20452L7.854 3.6204Z" fill="#F9B32C"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 12 11" fill="none">
                        <path id="Vector" d="M7.854 3.6204L6 0L4.146 3.6204L0 4.20452L3 7.02103L2.292 11L6 9.1204L9.708 11L9 7.02103L12 4.20452L7.854 3.6204Z" fill="#F9B32C"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 12 11" fill="none">
                        <path id="Vector" d="M7.854 3.6204L6 0L4.146 3.6204L0 4.20452L3 7.02103L2.292 11L6 9.1204L9.708 11L9 7.02103L12 4.20452L7.854 3.6204Z" fill="#F9B32C"/>
                    </svg>
                </div>

                <div className={reviewInputClasses.num_rating}>
                    <p>5</p>
                </div>
            </div>

            <div>
                <div className={reviewInputClasses.input_section}>
                    <div className={reviewInputClasses.input_title}>리뷰</div>
                    <p><textarea rows="5" className={reviewInputClasses.input_contents} placeholder={"리뷰를 작성해주세요."}/></p>
                </div>

                <div>
                    <div className={reviewInputClasses.input_title}>사진</div>
                    <div className={reviewInputClasses.input_picture_section}>
                        <div className={reviewInputClasses.input_picture}>사진업로드</div>
                        <div className={reviewInputClasses.input_picture}>사진업로드</div>
                    </div>
                </div>

                    <div className={reviewInputClasses.button_review_input_line}>
                        <button className={reviewInputClasses.button_review_input}>리뷰작성</button>
                    </div>
            </div>

        </div>
    );
};

export default ReviewInput;