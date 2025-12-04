'use client';

import React from 'react';
import {useMediaQuery} from "react-responsive";

const BackgroundAnimation =  function (){
  const totalElements = 10;
  const elements = [];
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

  if(!isDesktop) return null;

  for (let i = 1; i <= totalElements; i++) {
    elements.push(<div key={i} className={`c c-${i}`}></div>);
  }

  return (
    <div className="background-wrapper">
      <div className="wrap">{elements}</div>
    </div>
  );
};

export default React.memo(BackgroundAnimation);
