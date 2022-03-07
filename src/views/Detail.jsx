import React, { useEffect, useState } from 'react';
import { useGetByIdQuery, useUpdateCartApiMutation } from '../store/product';
import { useParams } from 'react-router-dom';
import MobileDetail from '../components/MobileDetail';
import SelectInput from '../components/SelectInput';
import { useTranslation } from 'react-i18next';
import Button from '../components/Button';
import { updateCart } from '../store/cart';
import { useDispatch } from 'react-redux';
import Spinner from '../components/Spinner';

function Detail() {
  const { id } = useParams();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { data, error, isLoading } = useGetByIdQuery(id);

  const [storage, setStorage] = useState();
  const [storageOptions, setStorageOptions] = useState([]);

  const [color, setColor] = useState();
  const [colorOptions, setColorOptions] = useState([]);

  const [isLoadingOptions, setIsLoadingOptions] = useState(true);

  const [updateCartApi, { isLoading: isUpdating, error: isError }] =
    useUpdateCartApiMutation();

  useEffect(() => {
    if (data) {
      setStorageOptions(data?.options?.storages);
      setColorOptions(data?.options?.colors);

      if (data?.options?.storages.length === 1) {
        setStorage(data?.options?.storages[0]);
      }

      if (data?.options?.colors.length === 1) {
        setColor(data?.options?.colors[0]);
      }

      setIsLoadingOptions(false);
    }
  }, [data]);

  const handleOnSumbit = () => {
    updateCartApi({
      id: data.id,
      colorCode: color.code,
      storageCode: storage.code,
    });

    // I use it because the last call dont return true info
    dispatch(
      updateCart({
        id: data.id,
        img: data.imgUrl,
        colorCode: color.code,
        color: color.name,
        storageCode: storage.code,
        storage: storage.name,
        model: data.model,
        brand: data.brand,
        price: data.price,
        quantity: 1,
      })
    );
  };

  return isLoading ? (
    <Spinner />
  ) : error ? (
    { error }
  ) : (
    <div className="sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:grid-rows-2 p-3 rounded-lg shadow-lg">
      <div className="row-span-2 flex justify-center max-h-72">
        <img src={data?.imgUrl} alt="product" />
      </div>
      <div className="">{data && <MobileDetail data={data} />}</div>
      <div>
        {!isLoadingOptions && (
          <>
            <SelectInput
              defaultValue={storage}
              onChange={setStorage}
              options={storageOptions}
              text={t('detail.storage')}
            />

            <SelectInput
              defaultValue={color}
              onChange={setColor}
              options={colorOptions}
              text={t('detail.color')}
            />
          </>
        )}
        <Button
          text={t('detail.add')}
          disabled={color && storage && !isUpdating ? false : true}
          handleOnClick={() => handleOnSumbit()}
        />
        <p>{isError}</p>
      </div>
    </div>
  );
}

export default Detail;
