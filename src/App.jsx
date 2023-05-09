import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Routes from './routes';
import { navigationRef } from './utils/navigation';
import GlobalStyle from './styles/global-style';
import * as ROUTES from './resources/routes-name';
import HandleScene from './screens/handle';
import { Fragment } from 'preact';
import './styles/style.css';

// if (env.node_env !== 'development') {
//   // console.log = () => null;
//   console.error = () => null;
// }

const AppContainer = () => {
  return (
    <Fragment>
      <Router ref={navigationRef}>
        <div />
        <Switch>
          <Route exact path={ROUTES.ROUTE_HANDLE} component={HandleScene} />
          <Route exact component={Routes} />
        </Switch>
      </Router>
    </Fragment>
  );
};
const App = () => {
  return (
    <Fragment>
      <AppContainer />
      <GlobalStyle />
    </Fragment>
  );
};

export default App;
