import React from 'react';

export const Footer = () => (
  <div className="text-center mt-8 pt-6 border-t border-gray-700">
     <p className="text-gray-400 text-sm md:text-base mb-1">
      © 2025 EveryHome. All rights reserved.
    </p>
    <p className="text-gray-400 text-sm">
      A product of{' '}
      <a 
        href="https://tltechnologies.net/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-gray-400 hover:text-white transition-colors duration-200"
      >
        TL Technologies
      </a>
    </p>
  </div>
);