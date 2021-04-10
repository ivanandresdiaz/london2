import React from 'react';

const ItemStory = (props) => {
  const { imagen } = props;
  return (
    <div className='LondonStories__stories-item'>
      <div className='LondonStore__item--borde'>
        <img src={imagen} alt='story' />
      </div>
      <p>Paneso</p>
    </div>
  );
};
export default ItemStory;
