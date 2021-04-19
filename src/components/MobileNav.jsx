import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MobileNav.scss';

const MobileNav = () => {
  return (
    <section className='MobileNav'>
      <Link to='/home'>
        <div className='MobileNav__home'>
          <div className='Mobile__barra Mobile__barra--home' />
          <span>. </span>
          <p>Home</p>
        </div>
      </Link>
      <Link to='/store'>
        <div className='MobileNav__store'>
          <div className='Mobile__barra Mobile__barra--store' />
          <span>. </span>
          <p>Store</p>
        </div>
      </Link>
      <Link to='/chat'>
        <div className='MobileNav__chat'>
          <div className='Mobile__barra Mobile__barra--chat' />
          <span>. </span>
          <p>Chat</p>
        </div>
      </Link>
      <Link to='/perfil'>
        <div className='MobileNav__profile'>
          <div className='Mobile__barra Mobile__barra--profile' />
          <span>. </span>
          <p>Profile</p>
        </div>
      </Link>
      <Link to='/carrito'>
        <div className='MobileNav__carrito'>
          <div className='Mobile__barra Mobile__barra--carrito' />
          <span>. </span>
          <p>Carrito</p>
        </div>
      </Link>
    </section>
  );
};
export default MobileNav;
