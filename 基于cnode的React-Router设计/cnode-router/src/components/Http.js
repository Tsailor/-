import axios from "axios";

const Http = axios.create({
    baseURL: " https://cnodejs.org/api/v1"
});

export default Http;