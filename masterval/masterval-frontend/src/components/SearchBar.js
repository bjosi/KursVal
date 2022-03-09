//import { useHistory } from 'react-router-dom';

import "../styles/SearchHeader.css"


const SearchBar = ({ searchQuery, setSearchQuery }) => (<form class="searchform" action="/" method="get">
    <label htmlFor="header-search">
        <span className="visually-hidden">posts</span>
    </label>
    <input class="SearchbarInput"
        value={searchQuery} onInput={e => setSearchQuery(e.target.value)} type="text"
        id="header-search"
        placeholder="Sok kurs"
        name="s"
    />
    <select class="terminInput">
        <option value="fruit">Fruit</option>
        <option value="vegetable">Vegetable</option>
        <option value="meat">Meat</option>
    </select>
    <button class="search_btn" type="submit">Sok kurser</button>
</form>
);

export default SearchBar;