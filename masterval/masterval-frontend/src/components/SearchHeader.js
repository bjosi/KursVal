import SearchBar from "./SearchBar";
import "../styles/SearchHeader.css";

const SearchHeader = () => (
  <div class="SearchHeader">
    <div class="searchbar_container">
      <h1 class="h1search"> Hitta kurser </h1>
      <SearchBar />
    </div>
  </div>
);

export default SearchHeader;
