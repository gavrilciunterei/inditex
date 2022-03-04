import React from 'react';
import { Link } from 'react-router-dom';

function Card({ img, id, model, brand, price }) {
  return (
    <Link to={`/detail/${id}`}>
      <div className="p-4">
        <div className="w-72 mx-auto overflow-hidden  rounded-lg shadow-lg bg-white transform hover:scale-105 transition duration-500">
          <div className="flex  justify-center">
            <img
              className="object-cover w-32 h-auto overflow-hidden"
              src={img}
              alt="avatar"
            />
          </div>

          <div className="flex flex-col pt-5 text-center">
            <span className="text-2xl font-bold text-black">{model}</span>
            <span className="text-sm text-black">{brand}</span>
            <span className=" bg-teal-100 text-teal-700 font-bold">
              {price.length > 0 ? price + '€' : 'No disponible'}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
