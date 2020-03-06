import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <form className="form-inline mb-2">
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search..."
        aria-label="Search"
        value={value}
        onChange={onChange}
      />
    </form>
  );
};

export default SearchBox;
