import React from 'react';

const BackgroundAnimation = () => {
  const totalElements = 144;
  const elements = [];

  for (let i = 1; i <= totalElements; i++) {
    elements.push(<div key={i} className={`c c-${i}`}></div>);
  }

  return (
    <div className="background-wrapper">
      <div className="wrap">{elements}</div>
    </div>
  );
};

export default BackgroundAnimation;
