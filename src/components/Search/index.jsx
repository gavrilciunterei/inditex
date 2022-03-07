import React from 'react';

function Search({ name, action }) {
  return (
    <div className="flex  mb-6  justify-center sm:justify-end">
      <div className="flex relative mx-automax-w-sm ">
        <input
          className="border-2 border-primary bg-red transition h-12 px-5 pr-16 rounded-md focus:outline-none w-full text-black text-lg "
          type="search"
          name="search"
          placeholder={name}
          onChange={(event) => action(event.target.value)}
        />
        <div type="submit" className="absolute right-2 top-3 mr-4">
          <svg
            className=" h-6 w-6 "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Search;
