import { FC, HTMLInputTypeAttribute } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styles/colors';

export const Input: FC<IInputProps> = ({ type, icon, placeholder, onType }) => {
  const InputIcon = icon;
  return (
    <Wrapper>
      <SLogin
        type={type}
        placeholder={placeholder}
        onChange={(evt) => {
          if (typeof onType === 'function') {
            onType(evt.target.value);
          }
        }}
      />
      <Icon className="icon">{InputIcon && <InputIcon />}</Icon>
    </Wrapper>
  );
};
export interface IInputProps {
  type: HTMLInputTypeAttribute;
  onType?: (value: string) => void;
  placeholder?: string;
  icon?: FC;
}
const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;
const SLogin = styled.input`
  border: none;
  width: inherit;
  border-radius: 8px;
  font-size: 1.2rem;
  padding-left: 48px;
  box-shadow: inset 0.2rem 0.2rem 0.5rem ${Colors.greyLight2}, inset -0.2rem -0.2rem 0.5rem white;
  background: none;
  font-family: inherit;
  color: ${Colors.greyDark};
  min-height: 48px;
  box-sizing: border-box;
  &:focus {
    outline: none;
    box-shadow: 0.3rem 0.3rem 0.6rem ${Colors.greyLight2}, -0.2rem -0.2rem 0.5rem white;
  }
  &:focus + .icon {
    color: ${Colors.primary};
  }
`;
const Icon = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  padding: 0 12px;
  color: ${Colors.greyDark};
  & > svg {
    height: inherit;
    fill: currentColor;
  }
`;
