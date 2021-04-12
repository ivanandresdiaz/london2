import React from 'react';
import { Link } from 'react-router-dom';
import MobileNav from '../components/MobileNav';
import StoreMenItem from '../components/StoreMenItem';
import StoreMenHeader from '../components/StoreMenHeader';
import '../styles/StoreMen.scss';

const MenStore = () => {
  return (
    <section className='StoreMen'>
      <StoreMenHeader contentP='Productos disponibles' title='Hombres' />
      <div className='StoreMen__products'>
        <Link to='/store/hombre/brandPants'>
          <StoreMenItem />
        </Link>
        <StoreMenItem />
        <StoreMenItem />
      </div>
      <MobileNav />
    </section>
  );
};
export default MenStore;
