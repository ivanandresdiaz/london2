import React from 'react';
import '../styles/MobileNav.scss';

const MobileNav = () => {
  return (
    <section className='MobileNav'>
      <div className='MobileNav__home'>
        <div className='Mobile__barra Mobile__barra--home' />
        <span>. </span>
        <p>Home</p>
      </div>
      <div className='MobileNav__store'>
        <div className='Mobile__barra Mobile__barra--store' />
        <span>. </span>
        <p>Store</p>
      </div>
      <div className='MobileNav__chat'>
        <div className='Mobile__barra Mobile__barra--chat' />
        <span>. </span>
        <p>Chat</p>
      </div>
      <div className='MobileNav__profile'>
        <div className='Mobile__barra Mobile__barra--profile' />
        <span>. </span>
        <p>Profile</p>
      </div>
      <div className='MobileNav__carrito'>
        <div className='Mobile__barra Mobile__barra--carrito' />
        <span>. </span>
        <p>Carrito</p>
      </div>
    </section>
  );
};
export default MobileNav;
