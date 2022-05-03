import React, { useState } from "react";
import "../styles/SearchHeader.css";

const SearchBar = ({ searchHandler, semesterHandler }) => {
  const [query, setQuery] = useState("");
  const [semester, setSemester] = useState("");

  return (
    <form className="searchform" action="/" method="get">
      <label htmlFor="header-search">
        <span className="visually-hidden">posts</span>
      </label>
      <input
        className="SearchbarInput"
        onInput={(e) => {
          searchHandler(e.target.value);
          setQuery(e.target.value);
        }}
        type="text"
        id="header-search"
        placeholder="S&ouml;k kurs"
        name="s"
      />
      {/* <select
        className="terminInput"
        onChange={(e) => {
          semesterHandler(e.target.value);
          setSemester(e.target.value);
        }}
        id="header-search"
        name="f"
      >
        <option value="Termin">Termin ...</option>
        <option value="7">Hösttermin, åk 4</option>
        <option value="8">Vårtermin, åk 4</option>
        <option value="9">Hösttermin, åk 5</option>
      </select> */}
      <button
        className="search_btn"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          searchHandler(query);
          //semesterHandler(semester);
        }}
      >
        S&ouml;k kurser
      </button>
    </form>
  );
};

export default SearchBar;
