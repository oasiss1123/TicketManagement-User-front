import { Spin } from 'antd';
import { SplashContainer } from './styled';

const SplashScreen = (props) => {
  return (
    <SplashContainer>
      <Spin tip={props.title || 'กำลังโหลดข้อมูล'} />
    </SplashContainer>
  );
};

export default SplashScreen;
