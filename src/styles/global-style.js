import { Row, Col } from 'antd';
import styled, { createGlobalStyle } from 'styled-components';
import { color } from '../resources';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'AnuphanRegular';
        src: url("../assets/fonts/OTF/Anuphan-Regular.otf") format("truetype");
    }
    @font-face {
        font-family: 'AnuphanBold';
        src: url("../assets/fonts/OTF/Anuphan-Bold.otf") format("truetype");
        font-weight: bold;
    }
    @font-face {
        font-family: 'AnuphanLight';
        src: url("../assets/fonts/OTF/Anuphan-Light.otf") format("truetype");
        font-weight: 100;
    }
    @font-face {
        font-family: 'AnuphanMedium';
        src: url("../assets/fonts/OTF/Anuphan-Medium.otf") format("truetype");
        font-weight: 600;
    }
    html, body {
        height: 100%;
        width: 100%;
        padding: 0;
        margin: 0;
        background: #FAFAFA;
        font-family: AnuphanLight, 'sans-serif' !important;
        color: #444;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

export const ContainerButton = styled(Col)`
  text-align-last: ${(props) =>
    props.left ? 'start' : props.center ? 'center' : props.right ? 'end' : ''};
  width: 100%;
`;

export const RowComponent = styled(Row)`
  display: flex;
  align-items: center;
`;

export const Required = styled.div`
  color: ${color.red};
  position: relative;
  top: 3px;
  left: 3px;
`;

export default GlobalStyle;
