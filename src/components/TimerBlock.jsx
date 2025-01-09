import React from 'react';

export const TimerBlock = ({ value, dimension, color }) => (
  <div className="flex flex-col items-center p-4">
    <div className="text-2xl md:text-3xl font-extrabold mb-2" style={{ color }}>
      {value}
    </div>
    <div className="text-sm md:text-md text-gray-300">{dimension}</div>
  </div>
);