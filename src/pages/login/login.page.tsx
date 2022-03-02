import { FC } from 'react';
import { useRouter } from 'react-router5';
import styled from 'styled-components';
import { ReactComponent as PasswordIcon } from '../../assets/icons/lock-solid.svg';
import { ReactComponent as UserIcon } from '../../assets/icons/user-solid.svg';
import logo from '../../assets/images/logo.png';
import { Button } from '../../shared/components/button/button.component';
import { Divide } from '../../shared/components/divide/divide.component';
import { Input } from '../../shared/components/form/input.component';
import { showBox } from '../../styles/animations';
import { Colors } from '../../styles/colors';

const credentials = { login: '', password: '' };
const Login: FC = () => {
  const router = useRouter();
  return (
    <Box>
      <Logo src={logo} />
      <Divide />
      <Form>
        <Input
          onType={(value) => (credentials.login = value)}
          icon={UserIcon}
          placeholder="Login: any"
          type="text"
        />
        <Input
          onType={(value) => (credentials.password = value)}
          icon={PasswordIcon}
          placeholder="Password: any"
          type="password"
        />
      </Form>
      <Divide />
      <Button
        onClick={() => {
          const { login, password } = credentials;
          if (Boolean(login) && Boolean(password)) {
            sessionStorage.setItem('user', 'authorized');
          }

          router.navigate('authorized.rockets');
        }}
      >
        SIGN IN
      </Button>
    </Box>
  );
};
export default Login;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 400px;
  max-width: 650px;
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  border-radius: 8px;
  box-shadow: 0.8rem 0.8rem 1.4rem ${Colors.greyLight2}, -0.2rem -0.2rem 1.8rem white;
  background-color: ${Colors.greyLight1};
  transform: translate3d(0, 0, 0) scale(0);
  will-change: transform;
  animation: 500ms ${showBox} 1.5s ease-in-out forwards;
`;
const Logo = styled.img`
  width: 200px;
`;
const Form = styled.div`
  width: 80%;
  & > div:first-child {
    margin-bottom: 24px;
  }
`;
