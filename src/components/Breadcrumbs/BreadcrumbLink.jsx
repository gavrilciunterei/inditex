import { generatePath, Link } from 'react-router-dom';

const BreadcrumbLink = ({ params, showTextOnly, path, text, textOnly }) => {
  const link = generatePath(path, params);
  return textOnly ? (
    <p className={`${textOnly && 'text-teal-700'}`}>{text}</p>
  ) : (
    <Link to={link}>{text}</Link>
  );
};

export default BreadcrumbLink;
