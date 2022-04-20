import './SearchBar.scss';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = () => {
  return (
    <div className="searchbar">
      <div className="searchbar-icon">
        <AiOutlineSearch />
      </div>
      <input type="text" placeholder="Search..." className="searchbar-input" />
    </div>
  )
}

export default SearchBar;