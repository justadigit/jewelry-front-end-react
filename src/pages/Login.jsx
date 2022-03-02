import { ErrorMessage, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import BACK from '../images/back3.jpg';
import TextError from './TextError';
import axios from 'axios';
import { useEffect } from 'react';
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

const InputGroup = styled.div`
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
  &:disabled {
    cursor: not-allowed;
    background-color: #eec800;
    color: gray;
  }
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
  useEffect(() => {
    const register = sessionStorage.getItem('register');
    if (register) {
      toast.success(' Successfully! Please Login!');
      sessionStorage.removeItem('register');
    }
  }, []);
  let navigate = useNavigate();
  const initialValues = {
    email: '',
    password: '',
  };

  const onSubmit = (values, onSubmitProps) => {
    const data = JSON.stringify(values);
    onSubmitProps.setSubmitting(true);
    axios
      .post('https://jewelry-third-step.herokuapp.com/api/auth/login', data, {
        headers: {
          'content-type': 'application/json',
        },
      })
      .then((response) => {
        //console.log('Success', response.data);
        if (response.data.error) {
          toast.error(response.data.message);
        } else {
          sessionStorage.setItem('userId', response.data.userId);
          sessionStorage.setItem('name', response.data.name);
          sessionStorage.setItem('email', response.data.email);
          sessionStorage.setItem('token', response.data.token);
          onSubmitProps.resetForm({
            email: '',
            password: '',
          });

          navigate('/user/' + response.data.userId);
        }
        onSubmitProps.setSubmitting(false);
      })
      .catch((error) => {
        console.log('Error', error.message);
        toast.error('Something Wrong!Please Try Again!');
        onSubmitProps.setSubmitting(false);
      });
  };
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required'),
  });

  return (
    <Container>
      <ToastContainer position="top-center" />
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
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form autoComplete="off">
              <InputGroup>
                <Input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                <ErrorMessage name="email">
                  {(msg) => <TextError>{msg}</TextError>}
                </ErrorMessage>
              </InputGroup>
              <InputGroup>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                <ErrorMessage name="password" component={TextError} />
              </InputGroup>
              <ButtonGroup>
                <Button disabled={!formik.isValid || formik.isSubmitting}>
                  Login
                </Button>
                <GoHome>
                  <NavLink to="/">Go Back</NavLink>
                </GoHome>
              </ButtonGroup>
            </Form>
          )}
        </Formik>
      </Wrapper>
    </Container>
  );
};

export default Login;
