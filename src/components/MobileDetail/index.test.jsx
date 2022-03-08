import React from 'react';
import renderer from 'react-test-renderer';
import MobileDetail from './index';
import '../../locale/index';

const data = {
  brand: 'Acer',
  model: 'Iconia Talk S',
  price: '160',
  cpu: 'Mali-T720MP2',
  ram: '2 GB RAM',
  os: 'Android',
  displayResolution: '7.0 inches (~69.8% screen-to-body ratio)',
  battery: 'Non-removable Li-Ion 3400 mAh battery (12.92 Wh)',
  primaryCamera: '13 MP, autofocus',
  secondaryCmera: '2 MP, 720p',
  dimentions: '191.7 x 101 x 9.4 mm (7.55 x 3.98 x 0.37 in)',
  weight: '260',
};

it('Test MobileDetail', () => {
  const tree = renderer.create(<MobileDetail data={data} />).toJSON();
  expect(tree).toMatchSnapshot();
});
