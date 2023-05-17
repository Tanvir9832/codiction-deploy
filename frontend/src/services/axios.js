import axios from "axios";

 const axiosInstance = axios.create({
    baseURL: "https://codiction-backend.vercel.app/",
    timeout: 150000,
})

export default axiosInstance;