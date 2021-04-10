import React from 'react';
import '../styles/LondonStories.scss';
import ItemStory from './ItemStory';
import imagen1 from '../assets/images/Imagen1.png';
import imagen2 from '../assets/images/Imagen2.png';
import imagen3 from '../assets/images/Imagen3.png';
import imagen4 from '../assets/images/Imagen4.png';
import imagen5 from '../assets/images/Imagen5.png';
import imagen6 from '../assets/images/Imagen6.png';
import imagen7 from '../assets/images/Imagen7.png';
import imagen8 from '../assets/images/Imagen8.png';
import imagen9 from '../assets/images/Imagen9.png';
import imagen10 from '../assets/images/Imagen10.png';
import imagen11 from '../assets/images/Imagen11.png';
import imagen12 from '../assets/images/Imagen12.png';
import imagen13 from '../assets/images/Imagen13.png';
import imagen14 from '../assets/images/Imagen14.png';
import imagen15 from '../assets/images/Imagen15.png';
import imagen16 from '../assets/images/Imagen16.png';
import imagen17 from '../assets/images/Imagen17.png';
import AddStory from './AddStory';

const LondonStories = () => {
  return (
    <section className='LondonStories'>
      <div className='LondonStories__container-title'>
        <h2 className='LondonStories__title'>Historias London</h2>
      </div>
      <div className='LondonStories__stories-container'>
        <AddStory />
        <ItemStory imagen={imagen1} />
        <ItemStory imagen={imagen2} />
        <ItemStory imagen={imagen3} />
        <ItemStory imagen={imagen4} />
        <ItemStory imagen={imagen5} />
        <ItemStory imagen={imagen6} />
        <ItemStory imagen={imagen7} />
        <ItemStory imagen={imagen8} />
        <ItemStory imagen={imagen9} />
        <ItemStory imagen={imagen10} />
        <ItemStory imagen={imagen11} />
        <ItemStory imagen={imagen12} />
        <ItemStory imagen={imagen13} />
        <ItemStory imagen={imagen14} />
        <ItemStory imagen={imagen15} />
        <ItemStory imagen={imagen16} />
        <ItemStory imagen={imagen17} />
      </div>
    </section>
  );
};
export default LondonStories;
