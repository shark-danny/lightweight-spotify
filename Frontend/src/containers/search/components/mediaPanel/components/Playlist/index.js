import React from "react";

import "./styles.scss";

const Playlist = ({ data }) => {
  const renderImage = () => {
    const url = data?.images?.[0]?.url || "https://via.placeholder.com/150";

    return <img src={url} alt="" />;
  };

  const renderDescription = () =>
    data.description.length > 100
      ? data.description.slice(0, 100).concat("...")
      : data.description;

  return (
    <div className="media-item-container">
      {renderImage()}
      <h5>
        <a href={data?.external_urls?.spotify} target="_blank">
          {data.name}
        </a>
      </h5>
      <p>{renderDescription()}</p>
    </div>
  );
};

export default Playlist;
