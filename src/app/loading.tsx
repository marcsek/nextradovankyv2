import React from 'react';

const Loading = () => {
  return (
    <span className="absolute inset-1/2">
      <span className="absolute h-8 w-8 animate-ping rounded-full bg-blue-400"></span>
      <span className="absolute h-8 w-8 rounded-full bg-blue-400"></span>
      <span className="sr-only">Loading...</span>
    </span>
  );
};

export default Loading;
