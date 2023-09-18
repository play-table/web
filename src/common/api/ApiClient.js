import axios from "axios";

axios.defaults.baseURL = "http://192.168.0.203:8000";

export const api = async (url, method, data) => {
    const body = await axios({
        url, method, data,
        headers:{"Authorization" : "Bearer eyJhbGciOiJIUzI1NiJ9.eyJyZWFsTmFtZSI6IuyCrOyepeydtOumhCIsInJvbGUiOiJPV05FUiIsIm5pY2tOYW1lIjoi7IKs7J6l64uJ64Sk7J6EIiwiY29udGFjdCI6IuyXsOudveyymCIsImlkIjoiN2U3MTUxYjctNjQ5MS00NDMwLWJlZjEtYzVkZGU5YzM2NzU4IiwicHJvZmlsZUltYWdlIjoi7ZSE66Gc7ZWE7J2066-47KeAIiwiZW1haWwiOiLsgqzsnqXsnbTrqZTsnbwiLCJ1c2VybmFtZSI6IuyCrOyepeyehCIsInN1YiI6IuyCrOyepeyehCIsImlhdCI6MTY5NTAwMDE4NiwiZXhwIjoxNjk3NTkyMTg2fQ.tXHJV3hifK8YP_cd5x6Sq372iTo_EkN-xSKb54TVxSs"},
    })
    return body.data
}

