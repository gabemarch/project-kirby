import { Link } from "react-router-dom";
import "./NavigationBar.scss";
import user from "../../assets/images/user.svg";
import { useState } from "react";

const NavigationBar = () => {

  const [isAuth, setIsAuth] = useState(false);
  function setAuthRoute() {
    return isAuth ? '/auth/my-profile' : '/auth/register';
  }

  return (
    <div className="navigation-bar">
      <ul className="navigation-bar-list">
        <Link to="/">
          <li className="navigation-bar-list-item">Home</li>
        </Link>
        <Link to="/comics-marvel">
          <li className="navigation-bar-list-item">Comics</li>
        </Link>
        <Link to={setAuthRoute()}>
          <img src={user} alt="person" className="navigation-bar-image" />
        </Link>
      </ul>
    </div>
  );
};

export default NavigationBar;
