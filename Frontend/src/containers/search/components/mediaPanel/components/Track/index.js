import React from "react";

import "./styles.scss";

const Track = ({ data }) => {
  const renderImage = () => {
    const url =
      data?.album?.images?.[0]?.url || "https://via.placeholder.com/150";

    return <img src={url} alt="" />;
  };

  const renderArtists = () =>
    data?.artists?.map((artist) => artist.name).join(", ");

  return (
    <div className="media-item-container">
      {renderImage()}
      <h5>
        <a href={data?.external_urls?.spotify} target="_blank">
          {data.name}
        </a>
      </h5>
      <audio controls src={data.preview_url}></audio>
      <p>Artists: {renderArtists()}</p>
    </div>
  );
};

export default Track;
