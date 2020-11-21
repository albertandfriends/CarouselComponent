import React from 'react';

const Slide = ({ url }) => {
  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '325px',
    width: 'auto',
    position: 'relative',
    top: '-25px',
  };

  return (
    <div className="image-slide" style={styles}></div>
  );
}

export default Slide;