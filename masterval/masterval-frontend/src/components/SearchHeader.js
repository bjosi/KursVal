import SearchBar from "./SearchBar";
import "../styles/SearchHeader.css";

const SearchHeader = ({ searchHandler, semesterHandler }) => {
  return (
    <div className="SearchHeader">
      <div className="searchbar_container">
        <h1 className="h1search"> Hitta kurser </h1>
        <SearchBar
          searchHandler={searchHandler}
          semesterHandler={semesterHandler}
        />
      </div>
    </div>
  );
};

/*Hello*/

export default SearchHeader;
