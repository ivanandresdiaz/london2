import React from 'react';
import picture from '../assets/images/Imagen1.png';
import mainLogo from '../assets/images/Ellipse 201.png';
import HeartIcon from '../styles/Icons/Heart.svg';
import ChatIcon from '../styles/Icons/Chat.svg';;

const New = () => {
  return (
    <section className='New'>
      <div className='New__header'>
        <div className='New__logo'>
          <img src={mainLogo} alt='' />
        </div>
        <div className='New__container--description'>
          <div className='New__title'>
            <h3>London Store</h3>
          </div>
          <div className='New__description'>
            <p>Llega nueva Colección este Fin de Semana😎😍😍</p>
          </div>
        </div>
      </div>
      <div className='New__body'>
        <div className='New__picture'>
          <img src={picture} alt='newImage' />
        </div>
        <div className='New__interactions'>
          <div className='love'>
            <img src={HeartIcon} alt='love' />
            <p>12K</p>
          </div>
          <div className='comment'>
            <img src={ChatIcon} alt='comments' />
            <p>988</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default New;
