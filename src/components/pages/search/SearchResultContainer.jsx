import React, {useEffect, useState} from 'react';
import styles from '../../../styles/pages/search/SearchResultContainer.module.css';
import NoSuchNotice from '../../atoms/NoSuchNotice';
import PopularStoreCard from "./PopularStoreCard";
import SearchStoreCard from "./SearchStoreCard";

const SearchResultContainer = ({stores}) => {

  return (
    <div className={styles.container}>
      <h3>레스토랑 검색 결과</h3>
        <div>
            {stores.map((value, index) => (
                <SearchStoreCard key={index} index={index} store={value} />
            ))}
        </div>
    </div>
  );
};

export default SearchResultContainer;
