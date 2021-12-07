import './SearchBar.scss';
import searchIcon from '../../assets/icons/magnifying-glass.svg';

const SearchBar = () => {
  return (
    <div className="searchbar">
      <input type="text" placeholder="Search..." className="searchbar-input" />
      <img src={searchIcon} alt="" className="searchbar-image" />
    </div>
  )
}

export default SearchBar;