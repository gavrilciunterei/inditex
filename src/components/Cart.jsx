import React from 'react';
import Dropdown from './Dropdown';
import { CartIcon, Delete } from './SvgIcons';

function Cart() {
  return (
    <Dropdown
      outElement={
        <div className="mr-4">
          <div slot="icon" class="relative">
            <div class="absolute text-xs rounded-full -mt-1 -mr-2 px-1 font-bold top-0 right-0 bg-red-700 text-white">
              3
            </div>
            <CartIcon />
          </div>
        </div>
      }
      insideElement={
        <>
          <div class="p-2 flex bg-gray-100 hover:bg-gray-200 cursor-pointer border-b border-gray-100">
            <div class="p-2 w-12">
              <img
                src="https://dummyimage.com/50x50/bababa/0011ff&amp;text=50x50"
                alt="img product"
              />
            </div>

            <div class="flex-auto text-sm w-32">
              <div class="font-bold">Product Name</div>
              <div class="text-gray-400">Quantity: 2</div>
            </div>

            <div class="flex flex-col w-18 font-medium items-end">
              <div class="w-4 h-4 mb-6 hover:bg-red-200 rounded-full cursor-pointer text-red-700">
                <Delete />
              </div>
              15€
            </div>
          </div>
          <div class="p-4 justify-center flex">
            <button class="text-base undefined hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-teal-700 hover:text-teal-100 bg-teal-100 text-teal-700 border duration-200 ease-in-out border-teal-600 transition">
              Checkout 15€
            </button>
          </div>
        </>
      }
    />
  );
}

export default Cart;
