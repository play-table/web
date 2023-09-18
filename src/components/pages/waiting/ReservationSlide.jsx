import React, { useState } from "react";
import Styles from "../../../styles/pages/waiting/Slide.css";

const ReservationSlide = ({ items, itemsPerPage, renderItem }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const visibleItems = items.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );


  const goToPrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <div className="slide-container">
        {visibleItems.map((item, index) => (
          <div key={index} className="slide-item">
            {renderItem(item)}
          </div>
        ))}
      </div>
      <div className="slide-navigation">
        <button onClick={goToPrevPage} disabled={currentPage === 0}>
          이전
        </button>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages - 1}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default ReservationSlide;
