import React from 'react';
import styled from 'styled-components';
import Category from '../components/Category';
import HeadNavbar from '../components/HeadNavbar';
import Navbar from '../components/Navbar';
import Product from './Product';
const Container = styled.div``;
const Shop = () => {
  return (
    <Container>
      <HeadNavbar />
      <Navbar />
      <Category />
      <Product />
    </Container>
  );
};

export default Shop;
