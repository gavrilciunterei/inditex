import api from './api';

const productServices = {
  getAll: () => {
    return api.get('/product');
  },
};

export default productServices;
