import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProductList from '../components/ProductList';
import JADE from '../images/jade.png';
const Container = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 20px;
`;

const Product = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get('https://jewelry-second-step.herokuapp.com/admin/all-items-api')
      .then((response) => {
        setProduct(response.data.result);
      });
  }, [products]);
  return (
    <Container>
      <ProductList products={products} />
    </Container>
  );
};

export default Product;
