import { FC, useEffect, useRef, useState } from 'react';
import { IOutlet } from 'react-spa-middleware';
import styled from 'styled-components';
import * as THREE from 'three';
import WAVES from 'vanta/dist/vanta.waves.min';

const Unauthorized: FC<IOutlet> = ({ Outlet }) => {
  const [vantaEffect, setVantaEffect] = useState<any>();
  const background = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: background.current,
          THREE: THREE,
          mouseControls: false,
          touchControls: false,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x9baacf,
          waveSpeed: 0.8,
        }),
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <Wrapper>
      <Background ref={background}></Background>
      <Content>
        <Outlet />
      </Content>
    </Wrapper>
  );
};
export default Unauthorized;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 99.9vh;
  overflow: hidden;
`;
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: inherit;
  height: inherit;
`;
const Content = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: inherit;
  height: inherit;
`;
