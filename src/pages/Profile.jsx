import React from 'react';
import MobileNav from '../components/MobileNav';
import ProfilePresentation from '../components/ProfilePresentation';
import SettingsItem from '../components/SettingsItem';
import imageSetting from '../styles/Icons/Setting.svg';
import '../styles/Profile.scss';

const Profile = () => {
  return (
    <section className='Profile'>
      <ProfilePresentation />
      <div className='Profile__title'>
        <img src={imageSetting} alt='configuracion' />
        <h2>Settings</h2>
      </div>
      <div className='Profile__setting-items'>
        <SettingsItem />
        <SettingsItem />
        <SettingsItem />
        <SettingsItem />
        <SettingsItem />
        <SettingsItem />
        <SettingsItem />
        <SettingsItem />
      </div>
      <MobileNav />
    </section>
  );
};
export default Profile;
