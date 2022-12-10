import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  params: { id: number };
}

async function getBeer(id: number) {
  const data = fetch(`https://api.punkapi.com/v2/beers?id=${id}`).then((res) => res.json());

  return data as Promise<IBeer[]>;
}

const BeerDetail = async ({ params: { id } }: Props) => {
  const [beer] = await getBeer(id);

  return (
    <div className="absolute inset-1/2 h-fit w-3/5 -translate-x-1/2 -translate-y-48 rounded-2xl bg-neutral-800 p-16">
      <div className="flex flex-col gap-8">
        <h1 className="relative flex min-w-max justify-between text-xl font-semibold uppercase">
          <span className="relative -left-4">Beer Detail</span>
          <Link href="/beers">
            <span>X</span>
          </Link>
        </h1>
        <div className="break-word grid grid-cols-3 items-center gap-x-8 gap-y-6  overflow-hidden break-words font-semibold">
          <p className="col-span-3 text-gray-300">
            Name: <span className="text-gray-100">{beer?.name}</span>
          </p>
          <p className="col-span-3 text-gray-300">
            Tagline: <span className="text-gray-100">{beer?.tagline}</span>
          </p>
          <p className="col-span-3 text-gray-300">
            Tips: <span className="text-gray-100">{beer?.brewers_tips}</span>
          </p>
          <p className="col-span-3 text-gray-300">
            Contributor: <span className="text-gray-100">{beer?.contributed_by}</span>
          </p>
          <p className="col-span-3 text-gray-300">
            Desc: <span className="text-gray-100">{beer?.description}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BeerDetail;
