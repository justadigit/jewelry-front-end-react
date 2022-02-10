import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import BACK from '../images/back3.jpg';
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.1)
    ),
    url(${BACK}) center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 20%;
  padding: 20px;
  background-color: white;
`;
const NavUnlisted = styled.ul`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  a {
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    padding: 10px 15px;
    border-radius: 5px;
    transition: 0.5s;
  }
  a:hover {
    background-color: #e8e8e8;
    transition: 0.5s;
  }
`;
const NavItem = styled.li`
  flex: 1;
  list-style: none;
  margin-left: 3px;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  height: 20px;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Button = styled.button`
  margin-top: 20px;
  width: 40%;
  border: none;
  padding: 15px 20px;
  cursor: pointer;
  background-color: gold;
  color: black;
  font-weight: bold;
`;
const GoHome = styled.span`
  margin-top: 20px;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  text-decoration: underline;
  color: black;
  font-weight: bold;
  text-align: center;
  a {
    color: black;
  }
`;
const Login = () => {
  return (
    <Container>
      <Wrapper>
        <NavUnlisted>
          <NavItem>
            <NavLink
              to="/register"
              style={({ isActive }) => ({
                backgroundColor: isActive ? ' #f8f8f8' : '',
                borderBottom: isActive ? ' 1px solid #cecece' : '',
              })}
            >
              REGISTER
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/login"
              style={({ isActive }) => ({
                backgroundColor: isActive ? ' #f8f8f8' : '',
                borderBottom: isActive ? ' 1px solid #cecece' : '',
              })}
            >
              LOGIN
            </NavLink>
          </NavItem>
        </NavUnlisted>
        <Title>Login</Title>
        <Form autoComplete="off">
          <Input placeholder="email" />
          <Input placeholder="password" />
          <ButtonGroup>
            <Button>LOGIN</Button>
            <GoHome>
              <NavLink to="/">Go Back</NavLink>
            </GoHome>
          </ButtonGroup>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
