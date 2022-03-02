import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

//creating react elments with styled-components
const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: 0px 8px 15px 4px rgba(0, 0, 0, 0.05);
  box-shadow: 0px 8px 15px 4px rgba(0, 0, 0, 0.05);
  z-index: 1;
`;
const Nav = styled.div`
  width: 80%;
  height: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Navbar = styled.div`
  display: flex;
`;
const Home = styled.button`
  border: none;
  background-color: white;
  padding: 5px 10px;
  cursor: pointer;
  border-bottom: 1px solid black;
  margin-right: 5px;
`;
const Logout = styled.button`
  border: none;
  background: #e10000;
  color: white;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
`;
const UserNav = ({ logout }) => {
  return (
    <Container>
      <Nav>
        <Navbar>
          <Home>
            <NavLink to="/" style={{ textDecoration: 'none', color: 'black' }}>
              Home
            </NavLink>
          </Home>
          <Home>
            <NavLink
              to="/shop"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              Products
            </NavLink>
          </Home>
        </Navbar>
        <Logout onClick={logout}>Logout</Logout>
      </Nav>
    </Container>
  );
};

export default UserNav;
