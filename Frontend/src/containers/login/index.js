import React from "react";

import useSpotifyCallBackURL from "../../hooks/useSpotifyCallBackURL";
import "./styles.scss";

const Login = () => {
  const { url, loading } = useSpotifyCallBackURL();
  return (
    <div className="login-container">
      {loading ? (
        <p>Loading please wait</p>
      ) : (
        <a href={url}>Login with Spotify</a>
      )}
    </div>
  );
};

export default Login;
