import axios from "axios";

axios.defaults.baseURL = "http://192.168.0.203:8000";

export const api = async (url, method, data) => {
    const body = await axios({
        headers:{Authorization : `Bearer ${localStorage.getItem('token')}`},
        url, method, data
    })
    return body.data
}

