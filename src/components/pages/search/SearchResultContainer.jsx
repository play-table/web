import React from 'react';
import styles from '../../../styles/pages/search/SearchResultContainer.module.css';
import NoSuchNotice from '../../atoms/NoSuchNotice';

const SearchResultContainer = () => {
  return (
    <div className={styles.container}>
      <h3>레스토랑 검색 결과</h3>
      <NoSuchNotice />
    </div>
  );
};

export default SearchResultContainer;
