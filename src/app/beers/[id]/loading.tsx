import React from 'react';

const loading = () => {
  return (
    <span className="">
      <span className="absolute h-6 w-6 animate-ping rounded-full bg-blue-400"></span>
      <span className="absolute h-6 w-6 rounded-full bg-blue-400"></span>
      <span className="sr-only">Loading...</span>
    </span>
  );
};

export default loading;
