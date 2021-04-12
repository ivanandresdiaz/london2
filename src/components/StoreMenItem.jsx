import React from 'react';
import pantsImage from '../assets/Pants/pants6.png';
import '../styles/StoreMenItem.scss';

const StoreMenItem = () => {
  return (
    <div className='StoreMenItem__type--product'>
      <img src={pantsImage} alt='pantalones' />
      <div className='StoreMenItem__description'>
        <div className='StoreMenItem__container--product-title'>
          <h3>Pantalones</h3>
          <div className='StoreMenItem__punto' />
        </div>
        <p>Disponible</p>
      </div>
    </div>
  );
};
export default StoreMenItem;
