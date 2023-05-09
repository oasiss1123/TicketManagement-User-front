import React from 'react';
import { useEffect, useState } from 'preact/hooks';
import WrapperComponent from '../components/hoc/Wrapper-component';
import * as ROUTES from '../resources/routes-name';
import { navigateReplaceTo } from '../utils/navigation';
import SplashScreen from './splash';

const IndexScene = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (!loading) {
    return navigateReplaceTo({ pathname: ROUTES.ROUTE_MAIN.PATH });
  }

  return <SplashScreen />;
};

export default WrapperComponent('IndexScene')(IndexScene);
