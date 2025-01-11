import React from 'react';

export const Header = ({ logo }) => (
  <div className="text-center mb-12">
    <img src={logo} alt="EveryHome Logo" className="w-24 h-auto mx-auto mb-6 rounded-lg" />
    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
      We're Coming Soon!
    </h1>
    <p className="text-gray-300 text-sm md:text-lg max-w-2xl mx-auto">
      Simplify Your Life with EveryHome
    </p>
  </div>
);