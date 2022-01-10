import axios from "./axios";

export const getLoginURL = () => axios.get("/auth/url");

export const getSearchData = (searchValue) =>
  axios.get("/search", {
    params: {
      s: searchValue,
    },
  });
