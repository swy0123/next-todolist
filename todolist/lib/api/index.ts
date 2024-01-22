import Axios from "axios";

const axiosAPI = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default axiosAPI;