import Switch from 'react-switch';
import { useState } from 'react';

const ProfileSettings = () => {

  const [isChecked, setIsChecked] = useState(false)

  const handleChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div className="profile-settings">
      <span>Dark mode</span>
      <Switch onChange={handleChange} checked={isChecked} />
      <span>Language</span>
      <Switch onChange={handleChange} checked={isChecked} />
    </div>
  )
}

export default ProfileSettings;