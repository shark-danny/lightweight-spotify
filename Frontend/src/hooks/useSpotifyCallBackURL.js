import React from "react";
import * as APIS from "../services/api";

const useSpotifyCallBackURL = () => {
  const [url, setURL] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const getURL = async () => {
    try {
      setLoading(true);
      const response = await APIS.getLoginURL();
      if (response.data && !response.data.error) setURL(response.data.url); // need to do error handling
      setLoading(false);
    } catch (error) {}
  };
  React.useEffect(() => {
    getURL();
  }, []);
  return { url, loading };
};

export default useSpotifyCallBackURL;
