import { useEffect } from 'preact/hooks';
import { ROUTE_LOGIN } from '../resources/routes-name';
import { windowNavigateReplaceTo } from '../utils/navigation';

export const useAuthEffect = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //
  }, [dispatch]);
};

export const useAuthLogin = () => {
  function toLogin() {
    windowNavigateReplaceTo({ pathname: ROUTE_LOGIN });
  }

  return {
    toLogin,
  };
};
