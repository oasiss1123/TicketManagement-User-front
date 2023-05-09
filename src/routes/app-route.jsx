import { Route } from 'react-router-dom';

const AppRoute = ({ component: Component, rest }) => {
  return (
    <Route {...rest} render={(routeProps) => <Component {...routeProps} />} />
  );
};

export default AppRoute;
