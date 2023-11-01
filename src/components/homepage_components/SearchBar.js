import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
const SearchBar = () => {
  return (
    <div>
      <input type="text" id="search-box" name="searchBox" />
      <span>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </span>
      <span>
        <FontAwesomeIcon icon={faXmark} />
      </span>
    </div>
  );
};

export default SearchBar;
