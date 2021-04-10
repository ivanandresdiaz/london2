import React from 'react';
import addStory from '../styles/Icons/Add.svg';

const AddStory = () => {
  return (
    <div className='LondonStories__stories-item'>
      <div className='LondonStore__item--add-icon'>
        <img src={addStory} alt='story' />
      </div>
      <p>Agregar</p>
    </div>
  );
};
export default AddStory;
