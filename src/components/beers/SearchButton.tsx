import { TiBeer } from 'react-icons/ti';

interface Props {
  loading?: boolean;
}

const SearchButton = ({ loading = false }: Props) => {
  return (
    <button
      type="submit"
      className="focus:duration-0 flex w-max basis-auto items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-2 text-lg font-semibold text-gray-200  outline-2 outline-blue-400 transition duration-200 hover:bg-blue-500 focus:outline"
    >
      <div className="flex h-5 w-5">
        {loading ? (
          <svg
            className="inline h-full w-full animate-spin text-indigo-100"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        ) : (
          <TiBeer className="mt-[1px] scale-[1.4]" />
        )}
      </div>
      Search Beers
    </button>
  );
};

export default SearchButton;
