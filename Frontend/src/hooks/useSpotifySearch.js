import React from "react";
import * as APIS from "../services/api";

const DEFAULT_DATA = {
  albums: [],
  artists: [],
  tracks: [],
  playlists: [],
};

const useSpotifySearch = () => {
  const [data, setData] = React.useState(DEFAULT_DATA);
  const [loading, setLoading] = React.useState(false);
  const getData = async (searchValue) => {
    try {
      setLoading(true);
      const response = await APIS.getSearchData(searchValue);
      if (response.data && !response.data.error) {
        const albums = response.data.data.albums?.items;
        const artists = response.data.data.artists?.items;
        const tracks = response.data.data.tracks?.items;
        const playlists = response.data.data.playlists?.items;
        setData({
          albums,
          artists,
          tracks,
          playlists,
        });
      }
      // need to do error handling
      setLoading(false);
    } catch (error) {
      console.log("Error");
    }
  };
  return { loading, data, getData };
};

export default useSpotifySearch;
