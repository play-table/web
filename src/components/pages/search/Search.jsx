import React from 'react';

import styles from '../../../styles/pages/search/Search.module.css';
import { MdKeyboardBackspace } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import PopularStoreContainer from './PopularStoreContainer';
import NoSuchNotice from '../../atoms/NoSuchNotice';
import SearchResultContainer from './SearchResultContainer';

const Search = () => {
  const nav = useNavigate();
  const backHandler = () => nav(-1);

  return (
    <div className={styles.search_container}>
      <div className={styles.search_header_container}>
        <MdKeyboardBackspace size="24px" onClick={backHandler} />
        <div className={styles.input_wrap}>
          <input id="searchInput" type="text" placeholder="레스토랑 검색" />
          <AiOutlineSearch size="24px" />
        </div>
      </div>

      <SearchResultContainer />
      <PopularStoreContainer />
    </div>
  );
};

export default Search;
