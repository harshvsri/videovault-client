import { CiSearch } from "react-icons/ci";

function SearchBar() {
  return (
    <div className="search">
      <input type="text" placeholder="Search for Videos" />
      <CiSearch className="search-icon" />
    </div>
  );
}

export default SearchBar;
