import Detail from './views/Detail';
import Home from './views/Home';

export const routes = [
  {
    path: '/',
    element: <Home />,
    breadCrumbs: [],
  },
  {
    path: 'detail/:id',
    element: <Detail />,
    breadCrumbs: [{ path: '/detail/:id', text: 'Product Details' }],
  },
];
