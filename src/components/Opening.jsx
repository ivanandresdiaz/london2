import React from 'react';
import MainLogo from '../assets/images/mainLogo.svg';
import '../styles/Opening.scss';

const Opening = () => {
  return (
    <section className='Opening'>
      <div className='Opening__container'>
        <div className='Opening__main-logo'>
          <a href='/'>
            <img src={MainLogo} alt='main Logo' />
          </a>
        </div>
        <div className='Opening__slogan'>
          <p>
            {' " '}
            Que la suerte te encuentre dandolo todo
            {' " '}
          </p>
        </div>
      </div>
    </section>
  );
};
export default Opening;
