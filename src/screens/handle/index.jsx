import React from 'react';
import { useEffect } from 'preact/hooks';
import { useLocation } from 'react-router-dom';
import { useAuthLogin } from '../../hooks/useAuth';
import { ROUTE_MAIN } from '../../resources/routes-name';
import { navigateTo } from '../../utils/navigation';
import SplashScreen from '../splash';
import { useLogin } from './hook/useLogin';

const HandleScene = () => {
  const { search } = useLocation();
  const { toLogin } = useAuthLogin();
  const { dispatchLogin, userState } = useLogin();

  if (!search) {
    toLogin();
    return <div />;
  }

  const params = new URLSearchParams(search);
  const auth = params.get('auth');
  if (!auth) {
    toLogin();
    return <div />;
  }

  useEffect(() => {
    onHandle();
  }, []);

  const onHandle = async () => {
    try {
      const at = auth.replace(/ /g, '+');
      dispatchLogin({ auth: at });
    } catch (error) {
      setTimeout(() => toLogin(), 500);
    }
  };

  if (userState) {
    navigateTo({ pathname: ROUTE_MAIN.PATH });
    return <div />;
  }

  return <SplashScreen title="กำลังตรวจสอบ" />;
};

export default HandleScene;
