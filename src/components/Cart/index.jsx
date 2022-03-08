import React, { useEffect } from 'react';
import Dropdown from '../Dropdown';
import { CartIcon, Delete } from '../SvgIcons';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem } from '../../store/slice/cart';
function Cart() {
  const { cartProducts } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <Dropdown
      outElement={
        <div className="mr-4">
          <div slot="icon" className="relative">
            <div className="absolute text-xs rounded-full -mt-1 -mr-2 px-1 font-bold top-0 right-0 bg-red-700 text-white">
              {cartProducts.length}
            </div>
            <CartIcon />
          </div>
        </div>
      }
      insideElement={
        cartProducts.length > 0 && (
          <>
            {cartProducts.map((product, index) => {
              return (
                <div
                  className="p-2 flex bg-gray-100 hover:bg-gray-200 cursor-pointer border-b border-gray-100"
                  key={index}
                >
                  <div className="p-2 w-12">
                    <img src={product.img} alt="img product" />
                  </div>

                  <div className="flex-auto text-sm w-32">
                    <div className="font-bold">
                      {product.brand + ' ' + product.model}
                    </div>
                    <div className="text-gray-400">
                      x{product.quantity} {product.color} {product.storage}
                    </div>
                  </div>

                  <div className="flex flex-col w-18 font-medium items-end">
                    <button
                      onClick={() => dispatch(deleteItem(index))}
                      className="w-4 h-4 mb-6 hover:bg-red-200 rounded-full cursor-pointer text-red-700"
                    >
                      <Delete />
                    </button>
                    {product.quantity > 1
                      ? product.price * product.quantity
                      : product.price}
                    €
                  </div>
                </div>
              );
            })}
          </>
        )
      }
    />
  );
}

export default Cart;
