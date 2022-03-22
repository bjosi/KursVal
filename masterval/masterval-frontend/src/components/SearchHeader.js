import SearchBar from "./SearchBar";
import "../styles/SearchHeader.css";

const SearchHeader = ({ searchHandler }) => {
  return (
    <div className="SearchHeader">
      <div className="searchbar_container">
        <h1 className="h1search"> Hitta kurser </h1>
        <SearchBar searchHandler={searchHandler} />
      </div>
    </div>
  );
};

/*Hello*/

export default SearchHeader;
