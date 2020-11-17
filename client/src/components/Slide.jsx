import React from 'react';

const Slide = ({ url }) => {
  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '325px',
    width: '820px',
    position: 'relative',
    top: '-25px',
    right: '-10px',
  };

  return (
    <div className="image-slide" style={styles}></div>
  );
}

export default Slide;