import { FavoriteBorder } from '@material-ui/icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import Category from '../components/Category';
import HeadNavbar from '../components/HeadNavbar';
import Navbar from '../components/Navbar';
import JADE from '../images/jade.png';
const Container = styled.div`
  width: 60%;
  margin: 20px auto;
  display: flex;
  height: 500px;
`;
const ImageCover = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 10px;
  background-color: #ebebeb;
`;
const Image = styled.img`
  width: 70%;
  height: 80%;
  object-fit: cover;
`;
const DetailsWrapper = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
`;
const Title = styled.h1`
  margin-top: 0;
`;
const Price = styled.span`
  margin: 20px 0;
  font-size: 20px;
  color: red;
  font-weight: 600;
`;
const Weight = styled.div`
  font-size: 18px;
  font-weight: 600;
  width: 50%;
  margin: 10px 0;
  display: flex;
`;
const ItemTitle = styled.span`
  flex: 3;
`;
const ItemValue = styled.span`
  flex: 2;
`;
const Description = styled.div`
  margin: 20px 0;
  margin-top: 40px;
  text-align: justify;
  line-height: 25px;
`;
const Avail = styled.span`
  font-size: 18px;
  font-weight: 600;
  width: 50%;
  margin: 10px 0;

  display: flex;
`;
const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  position: absolute;
  bottom: -15px;
`;
const Button = styled.button`
  padding: 10px;
  flex: 6;
  margin-right: 20px;
  background: #4aa5ff;
  border: 2px solid #d1d1d1;
  border-radius: 5px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.79);
  cursor: pointer;
`;
const Icon = styled.span`
  flex: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center !important;
  padding: 3px;
  border: 2px solid #d1d1d1;
  border-radius: 5px;
  & > * {
    font-size: 40px !important;
    color: #787878;
  }
`;
const Details = () => {
  let { pid } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios
      .get('https://jewelry-second-step.herokuapp.com/item/' + pid)
      .then((response) => {
        setProduct(response.data.item);
      });
  }, [product]);
  return (
    <>
      <HeadNavbar />
      <Navbar />
      <Category />
      <Container>
        <ImageCover>
          <Image
            src={`https://jewelry-second-step.herokuapp.com/` + product.image}
          />
        </ImageCover>
        <DetailsWrapper>
          <Title>{product.title}</Title>
          <Price>{product.price} MMK</Price>
          <Description>{product.description}</Description>
          <Weight>
            <ItemTitle>Weight</ItemTitle> <ItemValue>0.3 Caret</ItemValue>
          </Weight>
          <Avail>
            <ItemTitle>Availability</ItemTitle>{' '}
            <ItemValue>{product.itemRemain}</ItemValue>
          </Avail>
          <ButtonWrapper>
            <Button>Contact To Buy</Button>
            <Icon>
              <FavoriteBorder />
            </Icon>
          </ButtonWrapper>
        </DetailsWrapper>
      </Container>
    </>
  );
};

export default Details;
