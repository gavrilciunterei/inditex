import { Provider } from 'react-redux';
import store from './store/rootStore';

import './locale/index';
import Navbar from './components/Navbar';
import { useLocation, useRoutes } from 'react-router-dom';
import Breadcrumb from './components/Breadcrumbs/Breadcrumbs';
import { routes } from './routes';

function App() {
  const pages = useRoutes(routes);
  const location = useLocation();

  return (
    <Provider store={store}>
      <Navbar />
      <div className="mr-10 ml-10 mt-5">
        <Breadcrumb routes={routes} currentPath={location.pathname} />
        {pages}
      </div>
    </Provider>
  );
}

export default App;
