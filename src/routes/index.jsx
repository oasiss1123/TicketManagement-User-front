import { Switch } from 'react-router-dom';
import * as ROUTES from '../resources/routes-name';
import AppRoute from './app-route';
import IndexScene from '../screens';
import HomeScene from '../screens/home';
import FormScene from '../screens/form';

const Routes = () => {
  // const history = useHistory();
  // useEffect(() => {
  //   return history.listen(({ pathname }) => {
  //     console.log("LISTEN PATH => ", pathname);
  //   });
  // }, [history]);

  return (
    <Switch>

      <AppRoute
        exact
        key={ROUTES.ROUTE_MAIN.KEY}
        path={ROUTES.ROUTE_MAIN.PATH}
        component={FormScene}
      />
    </Switch>
  );
};

export default Routes;
