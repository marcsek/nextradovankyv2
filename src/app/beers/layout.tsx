'use client';

import React from 'react';
import SearchBar from '../../components/beers/SearchBar';
import useSWRMutation from 'swr/mutation';
import SearchResults from '../../components/beers/SearchResult';

interface Props {
  children: React.ReactNode;
}

async function postSearchBeers(_url: string, { arg }: { arg: string }): Promise<IBeer[]> {
  return fetch(`https://api.punkapi.com/v2/beers?beer_name=${arg}`).then((res) => res.json());
}

const BeerLayout = ({ children }: Props) => {
  const { trigger, data: searchResults, isMutating } = useSWRMutation('beers', postSearchBeers);

  const handleSearchSubmit = (searchString: string) => {
    trigger(searchString);
  };

  return (
    <section className="flex max-w-screen-lg grow flex-col gap-8 rounded-xl bg-foreground/10 p-16 shadow-2xl backdrop-blur-sm">
      <h1 className="relative -left-4 mb-4 text-xl font-semibold uppercase leading-none text-gray-50">Beer Search</h1>
      <SearchBar isLoading={isMutating} handleSearchSubmit={handleSearchSubmit} />
      <SearchResults searchResults={searchResults ?? []} />
      <div className="">{children}</div>
    </section>
  );
};

export default BeerLayout;
