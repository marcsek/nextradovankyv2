import Link from 'next/link';
import React from 'react';

interface Props {
  searchResults: IBeer[];
}

const SearchResults = ({ searchResults }: Props) => {
  return (
    <ul
      role="list"
      className="flex h-fit max-h-96 list-inside list-disc flex-col gap-3 overflow-y-auto rounded-xl bg-neutral-800/50 p-8 marker:text-blue-400"
    >
      {searchResults.map((beer) => (
        <li key={beer.id}>
          <Link href={`/beers/${beer.id}`}>
            <span className="text-lg text-gray-300">{beer.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
