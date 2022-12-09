import React from 'react';

const HomePage = () => {
  return (
    <div className="max-w-screen-lg rounded-xl bg-foreground/10 p-8 shadow-2xl backdrop-blur-sm">
      <article>
        <h1 className="mb-8 block text-8xl font-bold leading-none tracking-wide text-gray-100">Article</h1>
        <p className="mb-8 indent-8 text-lg font-semibold leading-relaxed text-gray-300">
          For years parents have espoused the health benefits of{' '}
          <span className="underline decoration-sky-500 decoration-2 underline-offset-2">eating garlic bread</span> with cheese to their
          children, with the food earning such an iconic status in our culture that kids will often dress up as warm, cheesy loaf for
          Halloween.
        </p>
        <p className="indent-8 text-lg font-semibold leading-relaxed text-gray-300">
          But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases springing up around the country.
        </p>
      </article>
    </div>
  );
};

export default HomePage;
