import React from 'react';
import { useTranslation } from 'react-i18next';
import DescriptionItems from './DescriptionItems';

function MobileDetail({ data }) {
  const {
    brand,
    model,
    price,
    cpu,
    ram,
    os,
    displayResolution,
    battery,
    primaryCamera,
    secondaryCmera,
    dimentions,
    weight,
  } = data;

  const { t } = useTranslation();

  return (
    <div>
      <DescriptionItems name={t('detail.brand')} text={brand} />
      <DescriptionItems name={t('detail.model')} text={model} />
      <DescriptionItems name={t('detail.price')} text={price} />
      <DescriptionItems name={t('detail.cpu')} text={cpu} />
      <DescriptionItems name={t('detail.ram')} text={ram} />
      <DescriptionItems name={t('detail.os')} text={os} />
      <DescriptionItems
        name={t('detail.displayResolution')}
        text={displayResolution}
      />
      <DescriptionItems name={t('detail.battery')} text={battery} />
      <DescriptionItems name={t('detail.primaryCamera')} text={primaryCamera} />
      <DescriptionItems
        name={t('detail.secondaryCmera')}
        text={secondaryCmera}
      />
      <DescriptionItems name={t('detail.dimentions')} text={dimentions} />
      <DescriptionItems name={t('detail.weight')} text={weight} />
    </div>
  );
}

export default MobileDetail;
