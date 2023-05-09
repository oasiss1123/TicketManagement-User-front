import App from './App';
import { StoreProvider } from './helpers/store-provider';
import 'antd/dist/antd.css';
import UserMobx from './mobx/UserMobx';

const Wrap = () => (
  <StoreProvider value={new UserMobx()}>
    <App />
  </StoreProvider>
);

export default Wrap;
