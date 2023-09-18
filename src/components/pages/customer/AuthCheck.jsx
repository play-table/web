import React, {useEffect, useState} from 'react';
import {useNavigate, useSearchParams} from "react-router-dom";
import axios from "axios";
import {api} from "../../../common/api/ApiClient";
import Customer from "./Customer";

const AuthCheck = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [signup, setSignup] = useState(false);
    const [token, setToken] = useState('');
    const nav = useNavigate();
    const getPdAuthTokenInfo = async () => {

        const {data} = await axios.get('http://192.168.0.184:8080/api/v1/auth/me', {
            headers: {"Authorization" : `Bearer ${searchParams.get('auth')}`}
        });

        return data
    }

    const checkMyMember = async (auth) =>{
        return await api(`api/v1/member/check`, "POST", {id: auth.id, email: auth.email, username: auth.username});
    }

    const authenticate = async () =>{
       const auth = await getPdAuthTokenInfo();
       const {token, redirect} = await checkMyMember(auth);

       if(redirect==='/signup'){
           setSignup(true);
           setToken(token);
       }

       if(redirect==='/owner'){
           localStorage.setItem('token', token);
           nav('/owner')
       }
        if(redirect==='/'){
            localStorage.setItem('token', token);
            nav('/')
        }
    }

    useEffect(()=> {
        authenticate();
    },[])

    return (
        <>
            {signup && <Customer token={token}/>}
        </>
    );
};

export default AuthCheck;