import React from 'react';
import { Link } from 'react-router-dom';
import MobileNav from '../components/MobileNav';
import StoreMenHeader from '../components/StoreMenHeader';
import oxford from '../assets/Brands/oxford.png';
import gef from '../assets/Brands/gef.png';
import rottCo from '../assets/Brands/RottCo.png';
import tommy from '../assets/Brands/Tommy.png';
import '../styles/StoreMenBrandPants.scss';

const StoreMenBrandPants = () => {
  return (
    <section className='StoreMenBrandPants'>
      <StoreMenHeader contentP='Pantalones' title='Marcas' />
      <div className='StoreMenBrands__Brands'>
        <Link to='/store/hombre/brandPants/oxford' className='StoreMenBrands__item'>
          <img src={oxford} alt='' />
        </Link>
        <Link to='/store/hombre/brandPants/oxford' className='StoreMenBrands__item'>
          <img src={gef} alt='' />
        </Link>
        <Link to='/store/hombre/brandPants/oxford' className='StoreMenBrands__item'>
          <img src={rottCo} alt='' />
        </Link>
        <Link to='/store/hombre/brandPants/oxford' className='StoreMenBrands__item'>
          <img src={tommy} alt='' />
        </Link>
      </div>
      <MobileNav />
    </section>
  );
};
export default StoreMenBrandPants;
