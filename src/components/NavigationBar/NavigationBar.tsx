import { Link } from "react-router-dom";
import "./NavigationBar.scss";
import user from "../../assets/images/user.svg";
import { useState } from "react";
import SearchBar from "@Components/SearchBar";

const NavigationBar = () => {

  const [isAuth, setIsAuth] = useState(false);
  function setAuthRoute() {
    return isAuth ? '/auth/my-profile' : '/auth/register';
  }

  return (
    <div className="navigation-bar">
      <ul className="navigation-bar-list">
        <li className="navigation-bar-list-item item-logo">ComicVerse</li>
        <Link to="/">
          <li className="navigation-bar-list-item">Home</li>
        </Link>
        <Link to="/comics-marvel">
          <li className="navigation-bar-list-item">Comics</li>
        </Link>
        <Link to="/auth/my-profile">
          <li className="navigation-bar-list-item">My Profile</li>
        </Link>
        <Link to="/about">
          <li className="navigation-bar-list-item">About</li>
        </Link>
        <li className="navigation-bar-list-item"><SearchBar /> </li>
        <Link to={setAuthRoute()}>
          <img src={user} alt="person" className="navigation-bar-image" />
        </Link>
      </ul>
    </div>
  );
};

export default NavigationBar;
