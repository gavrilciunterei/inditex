import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../components/Card';
import { getAllProducts } from '../store/product/index';
function Home() {
  const dispatch = useDispatch();
  const { allProducts } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <div className="flex flex-wrap -m-4  justify-center">
        {allProducts &&
          allProducts.map((prod, index) => {
            return (
              <Card
                key={prod.id}
                img={prod.imgUrl}
                brand={prod.brand}
                model={prod.model}
                id={prod.id}
              />
            );
          })}
      </div>{' '}
    </div>
  );
}

export default Home;
