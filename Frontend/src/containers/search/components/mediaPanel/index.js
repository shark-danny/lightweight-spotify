import React from "react";
import Album from "./components/Album";
import PropTypes from "prop-types";

import "./styles.scss";
import Artist from "./components/Artist";
import Playlist from "./components/Playlist";
import Track from "./components/Track";

const MediaPanel = (props) => {
  const renderData = () => {
    let Component;
    switch (props.title) {
      case "Albums":
        Component = Album;
        break;
      case "Artists":
        Component = Artist;
        break;
      case "Playlists":
        Component = Playlist;
        break;
      case "Tracks":
        Component = Track;
        break;

      default:
        Component = Album;
        break;
    }
    return props.data.map((row) => <Component data={row} />);
  };
  return (
    <div className="media-panel-container">
      <h3>{props.title}</h3>
      <div>{renderData()}</div>
    </div>
  );
};
MediaPanel.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})),
};

export default MediaPanel;
