import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

const SearchForm = (props) => {
  const [value, setValue] = React.useState("");
  const handleTextChange = (e) => setValue(e.currentTarget.value);
  const handleSearchClick = () => props.onChange(value);
  return (
    <div className="search-form-container">
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={handleTextChange}
      />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
};
SearchForm.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default SearchForm;
