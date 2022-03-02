import { FC } from 'react';
import { MainOutlet } from 'react-spa-middleware';
import { GlobalStyle } from './styles/global';

export const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <MainOutlet />
    </>
  );
};
