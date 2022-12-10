'use client';

import React, { useState } from 'react';
import SearchButton from './SearchButton';

const SearchBar = ({ handleSearchSubmit, isLoading }: { handleSearchSubmit: (searchString: string) => void; isLoading: boolean }) => {
  const [searchString, setSearchString] = useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSearchSubmit(searchString);
      }}
      className="flex text-6xl text-white"
    >
      <label className="flex grow flex-col text-sm  text-gray-300">
        Beer Name
        <div className="flex gap-4">
          <input
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
            className="grow rounded-lg border border-neutral-600 bg-neutral-800 px-2 py-1 text-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-400"
          ></input>
          <SearchButton loading={isLoading} />
        </div>
      </label>
      <label className="flex">
        <span className="sr-only">Cau</span>
      </label>
    </form>
  );
};

export default SearchBar;
