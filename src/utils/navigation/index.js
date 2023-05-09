import React from 'react';
import * as routes from '../../resources/routes-name';

export const navigationRef = React.createRef();

export const navigateTo = ({ pathname, state, search }) => {
  if (!navigationRef.current) {
    return;
  }

  if (!pathname) {
    navigationRef.current.history.push(routes.KEY_ROUTE_MAIN);
  }

  navigationRef.current.history.push({
    pathname,
    state: { ...state },
    search,
  });
};

export const navigateReplaceTo = ({ pathname, state = {}, search }) => {
  if (!navigationRef.current) {
    return;
  }
  if (!pathname) {
    navigationRef.current.history.replace(routes.ROUTE_MAIN);
  }
  navigationRef.current.history.replace({
    pathname: pathname,
    state: { ...state },
    search,
  });
};

export const windowNavigateReplaceTo = ({ pathname }) => {
  if (!pathname) {
    return;
  }
  window.location.replace(pathname);
};
