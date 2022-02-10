import axios from 'axios';
import { useReducer, useState } from 'react';
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
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
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
const initialFormState = {
  name: '',
  email: '',
  password: '',
};
const formReducer = (state, action) => {
  switch (action.type) {
    case 'HANDLE INPUT TEXT':
      return {
        ...state,
        [action.field]: action.payload,
      };
    default:
      return state;
  }
};
const Register = () => {
  const [formState, dispatch] = useReducer(formReducer, initialFormState);
  const [isLoading, setIsLoading] = useState(false);
  const handleTextChange = (e) => {
    dispatch({
      type: 'HANDLE INPUT TEXT',
      field: e.target.name,
      payload: e.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let data = JSON.stringify(formState);
    setIsLoading(true);
    axios
      .post('https://jewelry-third-step.herokuapp.com/api/sign-up', data)
      .then((res) => {
        if (res) {
          console.log(res);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err.message);
        setIsLoading(false);
      });
  };
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
        <Title>Create Account</Title>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <Input
            placeholder="name"
            type="text"
            name="name"
            value={formState.name}
            onChange={(e) => handleTextChange(e)}
          />
          <Input
            placeholder="email"
            type="email"
            name="email"
            value={formState.email}
            onChange={(e) => handleTextChange(e)}
          />
          <Input
            placeholder="password"
            type="password"
            name="password"
            value={formState.password}
            onChange={(e) => handleTextChange(e)}
          />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the{' '}
            <b style={{ cursor: 'pointer' }}>PRIVACY POLICY</b>
          </Agreement>
          <ButtonGroup>
            <Button>{isLoading ? 'Loading...' : 'LOGIN'}</Button>
            <GoHome>
              <NavLink to="/">Go Back</NavLink>
            </GoHome>
          </ButtonGroup>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
