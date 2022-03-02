import { FC } from 'react';
import { IOutlet } from 'react-spa-middleware';
import styled from 'styled-components';
import { Colors } from '../../styles/colors';

const Authorized: FC<IOutlet> = ({ Outlet }) => {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
};
export default Authorized;
const Wrapper = styled.div`
  width: 100%;
  height: 99.9vh;
  background-color: ${Colors.greyLight1};
`;
