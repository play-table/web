import React, {useState} from 'react';

import styles from '../../../styles/pages/search/Search.module.css';
import {MdKeyboardBackspace} from 'react-icons/md';
import {AiOutlineSearch} from 'react-icons/ai';
import {useNavigate} from 'react-router-dom';
import PopularStoreContainer from './PopularStoreContainer';
import SearchResultContainer from './SearchResultContainer';
import {api} from "../../../common/api/ApiClient";
import NoSuchNotice from "../../atoms/NoSuchNotice";

const Search = () => {
  const nav = useNavigate();
  const [keyword, setKeyword] = useState('');
  const [isFirst, setIsFirst] = useState(false);
  const [stores, setStores] = useState([]);
  const getStoreByName = async () => {
    try {
        const data = await api(`/api/v1/store?name=${keyword}`, "GET", {})
        setStores(data);
    } catch (error){
        alert('fail')
    }
  }
  const onChangeHandler = (e) =>{
      setKeyword(e.target.value);
  }

  const onClickHandler = () =>{
      setIsFirst(true)
      getStoreByName();
  }
  const backHandler = () => nav(-1);

  return (
    <div className={styles.search_container}>
      <div className={styles.search_header_container}>
        <MdKeyboardBackspace size="24px" onClick={backHandler} />
        <div className={styles.input_wrap}>
          <input id="searchInput" type="text" placeholder="레스토랑 검색" onChange={onChangeHandler}/>
          <AiOutlineSearch size="24px" onClick={onClickHandler}/>
        </div>
      </div>
        {isFirst && stores.length === 0 && <NoSuchNotice/>}
        {isFirst && stores.length !== 0 && <SearchResultContainer stores={stores}/>}
      <PopularStoreContainer />
    </div>
  );
};

export default Search;
