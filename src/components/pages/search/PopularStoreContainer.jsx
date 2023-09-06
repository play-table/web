import React, { useEffect, useState } from 'react';
import PopularStoreCard from './PopularStoreCard';
import styles from '../../../styles/pages/search/PopularStoreContainer.module.css';

const PopularStoreContainer = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    fetch('data/popularStoreData.json')
      .then((res) => res.json())
      .then((data) => setStores(data));
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
