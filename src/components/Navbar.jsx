import {
  Favorite,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShoppingCart,
  ShoppingCartOutlined,
} from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Container = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 40px;
`;

const Logo = styled.h1`
  cursor: pointer;
`;
const List = styled.ul`
  display: flex;
  list-style: none;
`;
const ListItem = styled.li`
  margin: 25px;
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
  return (
    <Container>
      <Logo>
        <Link style={{ textDecoration: 'none', color: 'black' }} to="/">
          Jewelry
        </Link>
      </Logo>
      <List>
        <ListItem>HOME</ListItem>
        <ListItem>SHOP</ListItem>
        <ListItem>PAGES</ListItem>
        <ListItem>BLOG</ListItem>
        <ListItem>CONTACT</ListItem>
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
