import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import { useGetAllProductsQuery } from '../store/product';
import Search from '../components/Search';
import { useTranslation } from 'react-i18next';

function Home() {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const { t } = useTranslation();
  const [dataFiltred, setDataFiltred] = useState();

  useEffect(() => {
    if (data) {
      setDataFiltred(data);
    }
  }, [data]);

  const handleOnSearch = (text) => {
    if (data) {
      if (text.length > 0) {
        const filtredData = data.filter(
          ({ model, brand }) =>
            model.toLowerCase().includes(text.toLowerCase()) ||
            brand.toLowerCase().includes(text.toLowerCase())
        );
        setDataFiltred(filtredData);
      } else {
        setDataFiltred(data);
      }
    }
  };

  return (
    <div>
      <Search action={handleOnSearch} name={t('home.search')} />
      <div className="flex flex-wrap -m-4  justify-center">
        {dataFiltred &&
          dataFiltred.map((prod, index) => {
            return (
              <Card
                key={prod.id}
                img={prod.imgUrl}
                brand={prod.brand}
                model={prod.model}
                price={prod.price}
                id={prod.id}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Home;
