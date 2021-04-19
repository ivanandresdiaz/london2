import React from 'react';
import { Link } from 'react-router-dom';
import MobileNav from '../components/MobileNav';
import SettingsItem from '../components/SettingsItem';
import ShoppingCarProduct from '../components/ShoppingCarProduct';
import '../styles/ShoppingCar.scss';
import ArrowLeft from '../styles/Icons/ArrowLeft.svg';

const ShoppingCar = () => {
  return (
    <>
      <section className='ShoppingCar'>
        <div className='ShoppingCar__header'>
          <Link to='/'>
            <img src={ArrowLeft} alt='come back' />
          </Link>
          <h2>Carrito de Compras</h2>
        </div>
        <div className='ShoppingCar__body'>
          <div className='ShoppingCar__shipment-details'>
            <h3>Detalles de envio</h3>
            <SettingsItem />
            <SettingsItem />
          </div>
          <div className='ShoppingCar__title'>
            <h3>Tus productos</h3>
          </div>
          <ShoppingCarProduct />
          <ShoppingCarProduct />
          <ShoppingCarProduct />
          <ShoppingCarProduct />
          <ShoppingCarProduct />
          <ShoppingCarProduct />
          <ShoppingCarProduct />
          <div className='ShoppingCar__container-payment'>
            <button type='button'>
              Pagar $169.000
            </button>
          </div>
        </div>
      </section>
      <MobileNav />
    </>
  );
};
export default ShoppingCar;
