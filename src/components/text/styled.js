// @ts-nocheck
import styled from 'styled-components';

export const TextStyle = styled.p`
  font-weight: ${(props) => (props.bold ? 'bold' : '')};
  color: ${(props) => (props.color ? props.color : 'black')};
  font-size: ${(props) => (props.size ? props.size : '12px')};
  text-align: ${(props) => (props.align ? props.align : '')};
  margin: 0;
`;
