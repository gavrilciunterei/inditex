import React from 'react';
import { SearchIcon } from '../SvgIcons';

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
          <SearchIcon />
        </div>
      </div>
    </div>
  );
}

export default Search;
