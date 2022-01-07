import { Link } from "react-router-dom";
import ProfileSettings from "../../components/ProfileSettings";

const Profile = () => {
  return (
    <div className="profile-page">
      <h1 className="profile-page-title">MY PROFILE</h1>
      <ul className="profile-page-list">
        <li className="profile-page-list-item">Settings</li>
        <ProfileSettings />
        <Link to="/auth/upload"> <li className="profile-page-list-item">Upload</li> </Link>
        <li className="profile-page-list-item">Favorites</li>
        <li className="profile-page-list-item">My Comics</li>
      </ul>
    </div>
  )
}


export default Profile;