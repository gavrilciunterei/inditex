import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/rootStore';
import Detail from './views/Detail';
import Home from './views/Home';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail/" element={<Detail />} />
      </Routes>
    </Provider>
  );
}

export default App;
