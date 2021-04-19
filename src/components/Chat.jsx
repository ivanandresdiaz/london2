import React from 'react';
import productoImagen from '../assets/shirt/shirt4.png';
import IconChecked from '../styles/Icons/checked.svg';
import '../styles/Chat.scss';

const Chat = () => {
  return (
    <section className='Chat'>
      <div className='Chat__product-image'>
        <img src={productoImagen} alt='producto' />
      </div>
      <div className='Chat__description'>
        <h3>Oxford</h3>
        <p>Cuanto cuesta la camisa?</p>
      </div>
      <div className='Chat__checked'>
        <img src={IconChecked} alt='visto' />
      </div>
    </section>
  );
};
export default Chat;
