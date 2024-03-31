// Copyright.js

import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const Copyright = () => {
  const { theme } = useContext(ThemeContext);
  const className = theme === 'dark' ? 'text-white' : '';

  return (
    <div className={`border-t-2 gradient-background ${className} w-auto h-auto text-base pb-2 pt-2 font-semibold flex justify-center font-bodyFont hover:text-bold`}>
      © 2024 Institute of Space Technology. All rights reserved.
    </div>
  );
};

export default Copyright;