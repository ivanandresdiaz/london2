import React from 'react';
import MujerImagen from '../assets/images/mujer.png';
import minus from '../styles/Icons/minus.svg';
import plus from '../styles/Icons/plus.svg';
import Delete from '../styles/Icons/Delete.svg';
import '../styles/ShoppingCarProduct.scss';

const ShoppingCarProduct = () => {
  return (
    <div className='ShoppingCarProduct'>
      <div className='ShoppingCarProduct__image-container'>
        <img className='ShoppingCarProduct__image' src={MujerImagen} alt='' />
      </div>
      <div className='ShoppingCarProduct__description'>
        <h4>Camisa Rosa</h4>
        <p>$ 169.000</p>
        <div className='ShoppingCarProduct__product--action-buttons'>
          <img src={minus} alt='menos' />
          <p>1</p>
          <img src={plus} alt='mas' />
        </div>
      </div>
      <div className='ShoppingCarProduct__delete-product'>
        <img src={Delete} alt='eliminar' />
      </div>
    </div>
  );
};
export default ShoppingCarProduct;
