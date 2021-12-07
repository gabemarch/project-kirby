import { Link } from 'react-router-dom';
import './NavigationBar.scss';
import user from '../../assets/images/user.svg';

const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <ul className="navigation-bar-list">
        <Link to="/"> <li className="navigation-bar-list-item">Home</li></Link>
        <Link to="/comics"> <li className="navigation-bar-list-item">Comics</li></Link>
        <Link to="/auth"> <img src={user} alt="person" className="navigation-bar-image" /></Link>
      </ul>
    </div>
  )
}

export default NavigationBar;