import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import Translate from './Translate';

function Navbar() {
  return (
    <nav className="font-sans flex vtext-center flex-row text-left justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
      <div className="mb-2 sm:mb-0">
        <Link
          to="/"
          className="text-2xl no-underline text-green-900 hover:text-green-700"
        >
          Logo
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <Cart />
        <Translate />
      </div>
    </nav>
  );
}

export default Navbar;
