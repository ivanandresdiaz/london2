import React from 'react';
import hombreLondon from '../assets/images/Hombre.png';
import '../styles/StoreMenHeader.scss';

const StoreMenHeader = (props) => {
  const { contentP, title } = props;
  return (
    <div className='StoreMen__header'>
      <div className='StoreMen__title--london'>
        <h2>
          London Store
        </h2>
      </div>
      <div className='StoreMen__title--men-container'>
        <img src={hombreLondon} alt='hombre' />
        <div className='StoreMen__title--men'>
          <h2>{title}</h2>
          <p>{contentP}</p>
        </div>
      </div>
    </div>
  );
};
export default StoreMenHeader;
