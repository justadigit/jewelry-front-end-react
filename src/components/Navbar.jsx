import {
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
} from '@material-ui/icons';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { LocalContext } from '../App';
const Container = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 40px;
  color: #000814;
`;

const Logo = styled.h1`
  cursor: pointer;
`;
const List = styled.ul`
  display: flex;
  list-style: none;
  a {
    text-decoration: none;
    color: black;
    padding: 5px 20px;
  }
`;
const ListItem = styled.li`
  margin: 25px 15px;
  font-weight: bold;
  cursor: pointer;
`;
const Shop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ShopIcon = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;
  & > * {
    font-size: 22px !important;
  }
`;
const Badge = styled.span`
  position: absolute;
  top: -5px;
  right: -7px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #aae798;
  font-size: 10px !important;
  color: white;
  font-weight: bold;
`;
const ShopText = styled.span`
  margin-left: 20px;
`;

const Navbar = () => {
  const { t } = useContext(LocalContext);
  return (
    <Container>
      <Logo>
        <NavLink style={{ textDecoration: 'none', color: '#000814' }} to="/">
          Jewelry
        </NavLink>
      </Logo>
      <List>
        <ListItem>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              backgroundColor: isActive ? ' #f8f8f8' : '',
              borderBottom: isActive ? ' 1px solid #cecece' : '',
            })}
          >
            {t('nhome')}
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            to="/shop"
            style={({ isActive }) => ({
              backgroundColor: isActive ? ' #f8f8f8' : '',
              borderBottom: isActive ? ' 1px solid #cecece' : '',
            })}
          >
            {t('nshop')}
          </NavLink>
        </ListItem>
        <ListItem>{t('npages')}</ListItem>
        <ListItem>{t('nblog')}</ListItem>
        <ListItem>{t('ncontact')}</ListItem>
      </List>
      <Shop>
        <ShopIcon>
          <FavoriteBorderOutlined />
          <Badge>2</Badge>
        </ShopIcon>
        <ShopIcon>
          <ShoppingCartOutlined /> <Badge>3</Badge>
        </ShopIcon>
        <ShopText> items: $150.00</ShopText>
      </Shop>
    </Container>
  );
};

export default Navbar;
