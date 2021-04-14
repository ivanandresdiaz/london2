import React from 'react';
import { Link } from 'react-router-dom';
import MobileNav from '../components/MobileNav';
import comebackIcon from '../styles/Icons/ArrowLeft.svg';
import brandIconOxford from '../assets/Brands/oxford.png';
import ArrowLeftMovement from '../styles/Icons/ArrowLeftMovement 2.svg';
import ArrowRightMovement from '../styles/Icons/ArrowRightMovement.svg';
import AddCar from '../styles/Icons/AddCar.svg';
import ChatBlue from '../styles/Icons/ChatBlue.svg';
import Pants1 from '../assets/Pants/Pants1.png';
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
      <div className='OfferPage__counter--container'>
        <div className='OfferPage__counter' />
        <div className='OfferPage__counter' />
        <div className='OfferPage__counter--blue' />
        <div className='OfferPage__counter' />
        <div className='OfferPage__counter' />
        <div className='OfferPage__counter' />
        <div className='OfferPage__counter' />
        <div className='OfferPage__counter' />
        <div className='OfferPage__counter' />
        <div className='OfferPage__counter' />
        <div className='OfferPage__counter' />
        <div className='OfferPage__counter' />
        <div className='OfferPage__counter' />
        <div className='OfferPage__counter' />
        <div className='OfferPage__counter' />
      </div>
      <div className='OfferPage__producto--main-container'>
        <Link to='/'>
          <img src={ArrowLeftMovement} alt='Left Arrow' />
        </Link>
        <div className='OfferPage__product--container'>
          <div className='OfferPage__product--image'>
            <img src={Pants1} alt='' />
          </div>
          <div className='OfferPage__product--description'>
            <h3>Camisa Blanca</h3>
            <p className='OfferPage__product--brand'>Oxford</p>
            <p className='OfferPage__product--avaliable'>Disponible</p>
            <p className='OfferPage__product--size'>Talla: S | M | L </p>
            <p className='OfferPage__product--price'>$120.000</p>
          </div>
          <div className='OfferPage__action'>
            <Link to='/' className='OfferPage__chat--seller'>
              <img src={ChatBlue} alt='Chatear con Vendedora' />
              <p>
                Chatear Vendedor
                (a)
              </p>
            </Link>
            <Link className='OfferPage__action--purchase' to='/'>
              <img src={AddCar} alt='Agregar Carro' />
              <p>Agregar Carrito</p>
            </Link>
          </div>
        </div>
        <Link to='/'>
          <img src={ArrowRightMovement} alt='Right Arrow' />
        </Link>
      </div>
      <MobileNav />
    </section>
  );
};
export default OfferPage;
