import SearchBar from "./SearchBar";
import "../styles/SearchHeader.css";

const SearchHeader = () => (
  <div className="SearchHeader">
    <div className="searchbar_container">
      <h1 className="h1search"> Hitta kurser </h1>
      <SearchBar />
    </div>
  </div>
);

/*Hello*/

export default SearchHeader;
