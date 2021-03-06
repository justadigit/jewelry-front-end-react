import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Header = styled.div`
  color: gray;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ProductHeader = styled.span``;
const PriceHeader = styled.select`
  background-color: #e0e0e0;
  border-radius: 10px;
  padding: 3px 20px;
  font-weight: bold;
  border: none;
`;
const Price = styled.option`
  border-radius: 10px;
  border: none;
`;
const Products = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
`;
const ProductItem = styled.div`
  width: 23.5%;
  margin: 10px 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid #c8c8c8;
  border-radius: 5px;
  padding-bottom: 20px;
`;
const ItemImageWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 200px;
  margin: 15px 0;
`;
const ItemImage = styled.img`
  padding: 10px;
  margin: 0 auto;
  width: 60%;
  height: 100%;
  object-fit: cover;
`;
const ItemButton = styled.button`
  width: 90%;
  margin: 5px auto;
  background-color: white;
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
`;
const ItemName = styled.span`
  font-weight: bold;
  margin: 5px;
  margin-bottom: 0;
`;
const ItemQuality = styled.span`
  color: gray;
  margin: 5px;
  margin-bottom: 20px;
`;
const ItemPrice = styled.span`
  padding: 10px;
  font-weight: 600;
`;
const CatProductList = ({ products }) => {
  return (
    <>
      <Header>
        <ProductHeader> 10 / 300 Products</ProductHeader>
        <PriceHeader>
          <Price value="">Price : Low to High</Price>
          <Price value="">Price : High to Low</Price>
          <Price value="">Price : Low Only</Price>
          <Price value="">Price : High Only</Price>
        </PriceHeader>
      </Header>
      <Products>
        {products.map((product) => (
          <ProductItem key={product._id}>
            <ItemImageWrapper>
              <ItemImage
                src={`${process.env.REACT_APP_API_ENDPOINT}` + product.image}
              />
            </ItemImageWrapper>
            <ItemButton>
              <Link
                style={{ textDecoration: 'none', color: 'black' }}
                to={`/details/${product._id}`}
              >
                QUICKVIEW
              </Link>
            </ItemButton>
            <ItemName>{product.title}</ItemName>
            <ItemQuality>{product.itemRemain}</ItemQuality>
            <ItemPrice>{product.price} MMK </ItemPrice>
          </ProductItem>
        ))}
      </Products>
    </>
  );
};

export default CatProductList;
