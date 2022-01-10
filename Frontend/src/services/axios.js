import axios from "axios";

const axiosInstant = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const setToken = (token) => {
  axiosInstant.defaults.headers = {
    Authorization: `Bearer ${token}`,
  };
};

export default axiosInstant;
