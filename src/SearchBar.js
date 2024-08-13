import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [searchbtn, setSearchbtn] = useState("Search now");
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
    setSearchbtn("Searching now..");
  };

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={query}
          onChange={handleInputChange}
        />
        <button className="search-button" onClick={handleSearch}>
          {searchbtn}
        </button>
        <br />
      </div>
      <div style={{ padding: "20px" }}>Searching for: {query}</div>
    </>
  );
};

export default SearchBar;
