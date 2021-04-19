import React from 'react';
import ProfileClient from '../assets/images/Hombre.png';
import '../styles/ProfilePresentation.scss';

const ProfilePresentation = () => {
  return (
    <section className='ProfilePresentation'>
      <h1>Perfil</h1>
      <div className='ProfilePresentation__container'>
        <img src={ProfileClient} alt='avatar' />
        <div className='ProfilePresentation__description'>
          <h3>Carlos Panesso</h3>
          <p>Fortul</p>
          <p>zridr@hotmail.com</p>
        </div>
      </div>
    </section>
  );
};
export default ProfilePresentation;
