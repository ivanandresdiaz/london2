import React from 'react';
import { Link } from 'react-router-dom';
import MainLogo from '../assets/images/mainLogo.svg';
import '../styles/Opening.scss';
import MobileNav from '../components/MobileNav';

const Opening = () => {
  return (
    <>
      <section className='Opening'>
        <div className='Opening__container'>
          <div className='Opening__main-logo'>
            <Link to='/'>
              <img src={MainLogo} alt='main Logo' />
            </Link>
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
      <MobileNav />
    </>

  );
};
export default Opening;
