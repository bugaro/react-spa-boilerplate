import styled from 'styled-components';
import { Colors } from '../../../styles/colors';

export const Button = styled.button`
  cursor: pointer;
  color: ${Colors.greyLight1};
  border: none;
  outline: none;
  width: 140px;
  height: 48px;
  border-radius: 122px;
  font-size: 1em;
  background: ${Colors.primary};
  box-shadow: inset 0.2rem 0.2rem 1rem ${Colors.primaryLight},
    inset -0.2rem -0.2rem 1rem ${Colors.primaryDark}, 0.3rem 0.3rem 0.6rem ${Colors.greyLight2},
    -0.2rem -0.2rem 0.5rem white;
  &:active {
    box-shadow: inset 0.2rem 0.2rem 1rem ${Colors.primaryDark},
      inset -0.2rem -0.2rem 1rem ${Colors.primaryLight};
  }
`;
