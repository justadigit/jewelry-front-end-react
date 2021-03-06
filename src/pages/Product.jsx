import axios from 'axios';
import React from 'react';

import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductList from '../components/ProductList';

const Container = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 20px;
`;

const Product = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_ENDPOINT}/api/posts `)
      .then((response) => {
        setProduct(response.data.result);
        setLoading(false);
      });
  }, []);
  return (
    <Container>
      {loading ? 'Loading....' : <ProductList products={products} />}
    </Container>
  );
};

export default Product;
