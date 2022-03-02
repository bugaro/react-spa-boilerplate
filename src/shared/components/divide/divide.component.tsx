import { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styles/colors';

export const Divide: FC = () => {
  return <SDivide />;
};
const SDivide = styled.div`
  height: 1px;
  width: 100%;
  margin: 30px 0;
  background-color: ${Colors.greyLight3};
  box-shadow: 0 0 1px 0.5px #ffffffad;
`;
