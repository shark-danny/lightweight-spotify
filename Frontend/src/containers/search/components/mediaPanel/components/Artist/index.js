import React from "react";

import "./styles.scss";

const Artist = ({ data }) => {
  console.log("data", data);
  const renderImage = () => {
    const url = data?.images?.[0]?.url || "https://via.placeholder.com/150";

    return <img src={url} alt="" />;
  };

  const renderGenres = () => data?.genres?.join(", ");

  return (
    <div className="media-item-container">
      {renderImage()}
      <h5>
        <a href={data?.external_urls?.spotify} target="_blank">
          {data.name}
        </a>
      </h5>
      <p>Genres: {renderGenres()}</p>
    </div>
  );
};

export default Artist;
