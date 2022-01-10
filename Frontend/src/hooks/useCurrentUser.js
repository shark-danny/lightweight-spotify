import React from "react";
import * as axios from "../services/axios";

const useCurrentUser = () => {
  const [accessToken, setAccessToken] = React.useState(undefined);
  const checkIfUserLogin = () => {
    const token = new URLSearchParams(window.location.search).get(
      "accesstoken"
    );
    if (token) {
      setAccessToken(token);
      axios.setToken(token);
    }
  };
  React.useEffect(() => {
    checkIfUserLogin();
  }, []);
  return { isLoggedIn: !!accessToken, accessToken };
};

export default useCurrentUser;
