import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.scss';

const NotFound = () => {
  return (
    <section className='NotFound'>
      <div className='NotFound__container'>
        <div className='NotFound__404'>
          <p>404</p>
        </div>
        <div className='NotFound__description--main'>
          <p>Upps! Pagina no encontrada</p>
        </div>
        <div className='NotFound__description--details'>
          <p>Asegurate de que la direccion web este bien escrita, o puedes volver al home y intentar de nuevo</p>
        </div>
        <div className='NotFound__buttons'>
          <Link to='/' className='NotFound__buttons--home'>
            Home
          </Link>
          <Link to='/' className='NotFound__buttons--escribenos'>
            Escribenos
          </Link>
        </div>
      </div>
    </section>
  );
};
export default NotFound;
