import { Fragment, useEffect, useState } from 'react';
import { matchRoutes } from 'react-router-dom';
import BreadcrumbLink from './BreadcrumbLink';
import HomeLink from './HomeLink';
import { ArrowIcon } from '../SvgIcons';

const Breadcrumb = (props) => {
  const { routes, currentPath } = props;
  const [breadCrumbs, setbreadCrumbs] = useState([]);
  const [params, setParams] = useState({});

  useEffect(() => {
    const [matchedRoute] = matchRoutes(routes, currentPath, '/');
    const { breadCrumbs } = matchedRoute.route;

    setParams(matchedRoute.params);
    setbreadCrumbs(breadCrumbs);
  }, [routes, currentPath]);

  return (
    <div className="flex items-center mb-6">
      {breadCrumbs.length > 0 && <HomeLink />}
      {breadCrumbs.map((crumb, index) => {
        const isLast = breadCrumbs.indexOf(crumb) === breadCrumbs.length - 1;
        return (
          <Fragment key={index}>
            <ArrowIcon />
            <BreadcrumbLink
              params={params}
              path={crumb.path}
              text={crumb.text}
              textOnly={isLast}
            />
          </Fragment>
        );
      })}
    </div>
  );
};
export default Breadcrumb;
