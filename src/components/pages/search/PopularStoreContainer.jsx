import React, { useEffect, useState } from 'react';
import PopularStoreCard from './PopularStoreCard';
import styles from '../../../styles/pages/search/PopularStoreContainer.module.css';
import {api} from "../../../common/api/ApiClient";

const PopularStoreContainer = () => {
    const [stores, setStores] = useState([]);

    const getStore = async () => {
        try {
            const data = await api("/api/v1/store/waiting-top", "GET", {})
            setStores(data);
        } catch (error){
            alert('fail')
        }
    }
    useEffect(() => {
        getStore();
    }, []);
  return (
    <div className={styles.store_container}>
      <h3>인기 급상승 레스토랑</h3>
      <div>
        {stores.map((value, index) => (
          <PopularStoreCard key={index} index={index} store={value} />
        ))}
      </div>
    </div>
  );
};

export default PopularStoreContainer;
