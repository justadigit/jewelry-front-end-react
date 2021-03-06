import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Category from '../components/Category';
import CatProductList from '../components/CatProductList';
import HeadNavbar from '../components/HeadNavbar';
import Navbar from '../components/Navbar';
const Container = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 20px;
`;
const CategoryItem = () => {
  let { catId } = useParams();
  const [catProducts, setcatProducts] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_ENDPOINT}/api/category/` + catId)
      .then((response) => {
        setcatProducts(response.data.items);
        setLoading(false);
        console.log(response.data.items);
      });
  }, [catId]);
  return (
    <>
      <HeadNavbar />
      <Navbar />
      <Category />
      <Container>
        {loading ? 'Loading...' : <CatProductList products={catProducts} />}
      </Container>
    </>
  );
};

export default CategoryItem;
