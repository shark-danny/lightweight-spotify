import React from "react";
import SearchForm from "./components/searchForm";
import useSpotifySearch from "../../hooks/useSpotifySearch";
import MediaPanel from "./components/mediaPanel";

const Search = () => {
  const { data, getData, loading } = useSpotifySearch();
  const handleSearch = (value) => getData(value);
  return (
    <div>
      <h1>Search</h1>
      <SearchForm onChange={handleSearch} />
      {loading && <p>Loading</p>}
      {!!data?.albums?.length && (
        <MediaPanel title="Albums" data={data.albums} />
      )}
      {!!data?.artists?.length && (
        <MediaPanel title="Artists" data={data.artists} />
      )}
      {!!data?.playlists?.length && (
        <MediaPanel title="Playlists" data={data.playlists} />
      )}
      {!!data?.tracks?.length && (
        <MediaPanel title="Tracks" data={data.tracks} />
      )}
    </div>
  );
};

export default Search;
