import React from 'react';
import '../styles/SettingsItem.scss';
import Location from '../styles/Icons/Location.svg';
import ArrowRightMovement from '../styles/Icons/ArrowRightMovement.svg';

const SettingsItem = () => {
  return (
    <section className='SettingsItem'>
      <div className='SettingsItem__container--image'>
        <img src={Location} alt='Ubicacion' />
      </div>
      <div className='SettingsItem__description'>
        <h4>Fortul, Arauca</h4>
        <p>Carrera 16 #6-37</p>
      </div>
      <div className='SettingsItem__icon-link'>
        <img src={ArrowRightMovement} alt='Mas' />
      </div>
    </section>
  );
};
export default SettingsItem;
