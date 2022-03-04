import { Link } from 'react-router-dom';
import { HomeIcon } from '../SvgIcons';

const HomeLink = () => {
  return (
    <Link to="/">
      <HomeIcon />
    </Link>
  );
};

export default HomeLink;
