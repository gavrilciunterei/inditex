import { generatePath, Link } from 'react-router-dom';

const BreadcrumbLink = ({ params, showTextOnly, path, text, textOnly }) => {
  const link = generatePath(path, params);
  return textOnly ? text : <Link to={link}>{text}</Link>;
};

export default BreadcrumbLink;
