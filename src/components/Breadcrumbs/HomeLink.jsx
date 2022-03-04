import { Link } from 'react-router-dom';
import Home from '../../assets/img/Home';

const HomeLink = () => {
  return (
    <Link to="/">
      <Home />
    </Link>
  );
};

export default HomeLink;
