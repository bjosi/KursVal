//import { useHistory } from 'react-router-dom';

import React from "react";
import "../styles/SearchHeader.css";

const SearchBar = ({
  searchQuery,
  filterQuery,
  setSearchQuery,
  setFilterQuery,
}) => {
  return (
    <form className="searchform" action="/" method="get">
      <label htmlFor="header-search">
        <span className="visually-hidden">posts</span>
      </label>
      <input
        className="SearchbarInput"
        value={searchQuery}
        onInput={(e) => setSearchQuery(e.target.value)}
        type="text"
        id="header-search"
        placeholder="S&ouml;k kurs"
        name="s"
      />
      <select
        className="terminInput"
        defaultValue={filterQuery}
        onChange={({ target: { value } }) => setFilterQuery(value)}
        id="header-search"
        name="f"
      >
        <option value="Termin">Termin ...</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
      </select>
      <button className="search_btn" type="submit">
        S&ouml;k kurser
      </button>
    </form>
  );
};

export default SearchBar;
