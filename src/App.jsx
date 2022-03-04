import { Routes, Route } from 'react-router-dom';
import Detail from './views/Detail';
import Home from './views/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="detail/" element={<Detail />} />
    </Routes>
  );
}

export default App;
