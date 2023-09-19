import React, {useEffect, useState} from 'react';
import {api} from "../../../common/api/ApiClient";
import {useNavigate, useParams} from "react-router-dom";

const MyStore = () => {
    const [stores, setStores] = useState([]);

    const params = useParams();

    const nav = useNavigate();

    const onClickHandler = (e, id) => {
        nav(`/owner/${id}/${params.redirect}`)
    }

    useEffect(()=>{
        getStores()
    }, []);

    const getStores = async () => {
        const data = await api(`/api/v1/store/my`, 'GET', {})
        setStores(data);
    }
    return (
        <div >
            {stores.map((value, index)=>(
                <div key={index} onClick={e=>onClickHandler(e, value.id)}>
                    <p>{value.id}</p>
                    <p>{value.name}</p>
                    <p>{value.address}</p>
                </div>
            ))}
        </div>
    );
};

export default MyStore;