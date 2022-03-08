import { Provider } from 'react-redux';
import store from './store/rootStore';

import './locale/index';
import Navbar from './components/Navbar';
import { useLocation, useRoutes } from 'react-router-dom';
import Breadcrumb from './components/Breadcrumbs/Breadcrumbs';
import { routes } from './routes';
import Container from './components/Container';

function App() {
  const pages = useRoutes(routes);
  const location = useLocation();
  return (
    <Provider store={store}>
      <Navbar />
      <Container>
        <Breadcrumb routes={routes} currentPath={location.pathname} />
        {pages}
      </Container>
    </Provider>
  );
}

export default App;
