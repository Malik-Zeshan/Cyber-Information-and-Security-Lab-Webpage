import React from 'react';
import LeftB from './LeftB';
import RightB from './RightB';
const Banner = () => {
  return (
    <section
      id='home'
      className='gradient-background  px-10 w-full h-50px flex felx-col h-auto font-titleFont '
    >
        <LeftB/>
        <RightB/>
    </section>
  );
};

export default Banner;