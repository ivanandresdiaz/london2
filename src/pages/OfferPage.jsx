import React from 'react';
import { Link } from 'react-router-dom';
import OfferPageCounterItems from '../components/OfferPageCounterItems';
import OfferPageProduct from '../components/OfferPageProduct';
import MobileNav from '../components/MobileNav';
import comebackIcon from '../styles/Icons/ArrowLeft.svg';
import brandIconOxford from '../assets/Brands/oxford.png';

import '../styles/OfferPage.scss';

const OfferPage = () => {
  return (
    <section className='OfferPage'>
      <div className='OfferPage__nav--comeback'>
        <Link to='/'>
          <img className='OfferPage__icon--comeback' src={comebackIcon} alt='' />
        </Link>
        <img className='OfferPage__icon--brand' src={brandIconOxford} alt='' />
        <h3 className='OfferPage__title--brand'>Pantalones Oxford</h3>
      </div>
      <OfferPageCounterItems />
      <div className='OfferPage__container--all-products'>
        <OfferPageProduct />
        <OfferPageProduct />
        <OfferPageProduct />
        <OfferPageProduct />
        <OfferPageProduct />
        <OfferPageProduct />
        <OfferPageProduct />
      </div>
      <MobileNav />
    </section>
  );
};
export default OfferPage;
