import React from 'react';
import { Link } from 'react-router-dom';
import MobileNav from '../components/MobileNav';
import LogoLondon from '../assets/images/Ellipse 201.png';
import '../styles/Store.scss';
import hombreLondon from '../assets/images/Hombre.png';
import mujerLondon from '../assets/images/mujer.png';
import niñoLondon from '../assets/images/niño.png';
import niñaLondon from '../assets/images/niña.png';

const Store = () => {
  return (
    <section className='Store'>
      <div className='Store__header--title'>
        <img src={LogoLondon} alt='' />
        <h1>London Store</h1>
      </div>
      <div className='Store__gender--type'>
        <Link to='/store/hombre'>
          <div className='Store__item'>
            <img src={hombreLondon} alt='hombre' />
            <p>Hombre</p>
          </div>
        </Link>
        <Link to='/store/mujer'>
          <div className='Store__item'>
            <img src={mujerLondon} alt='mujer' />
            <p>Mujer</p>
          </div>
        </Link>
        <Link to='/store/niño'>
          <div className='Store__item'>
            <img src={niñoLondon} alt='niño' />
            <p>Niño</p>
          </div>
        </Link>
        <Link to='/store/niña'>
          <div className='Store__item'>
            <img src={niñaLondon} alt='niña' />
            <p>Niña</p>
          </div>
        </Link>
      </div>
      <MobileNav />
    </section>
  );
};
export default Store;
