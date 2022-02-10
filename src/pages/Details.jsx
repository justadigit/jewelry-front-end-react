import { FavoriteBorder } from '@material-ui/icons';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { LocalContext } from '../App';
import Category from '../components/Category';
import HeadNavbar from '../components/HeadNavbar';
import Navbar from '../components/Navbar';
import './Details.css';
const Container = styled.div`
  width: 60vw;
  margin: 10px auto;
  margin-bottom: 0;
  display: flex;
`;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
  margin-bottom: 10px;
`;
const ImageCover = styled.div`
  flex: 1;

  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #ebebeb;
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
  a {
    color: white;
    text-decoration: none;
  }
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
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const [relatedImage, setRelatedImage] = useState([]);
  const t = useContext(LocalContext);
  useEffect(() => {
    axios
      .get('https://jewelry-second-step.herokuapp.com/item/' + pid)
      .then((response) => {
        setProduct(response.data.item);
        setRelatedImage(response.data.item.relatedImg);
        setLoading(false);
      });
  }, [pid, product, relatedImage]);
  return (
    <>
      <HeadNavbar />
      <Navbar />
      <Category />
      <Container>
        {loading ? (
          'Loading....'
        ) : (
          <Wrapper>
            {/* <Image
              src={`https://jewelry-second-step.herokuapp.com/` + product.image}
            /> */}
            <ImageCover>
              <Carousel
                loop={true}
                showStatus={false}
                showIndicators={false}
                showArrows={false}
                infiniteLoop={true}
                width={'80%'}
                autoPlay={true}
                thumbWidth={'100%'}
              >
                <div className="rimage">
                  <img
                    src={
                      `https://jewelry-second-step.herokuapp.com/` +
                      product.image
                    }
                    alt=""
                  />
                </div>
                {relatedImage.map((relatedImg, key) => (
                  <div className="rimage" key={key}>
                    <img
                      src={
                        `https://jewelry-second-step.herokuapp.com/` +
                        relatedImg
                      }
                      alt=""
                    />
                  </div>
                ))}
              </Carousel>
            </ImageCover>
            <DetailsWrapper>
              <Title>{product.title}</Title>
              <Price>{product.price} MMK</Price>
              <Description>{product.description}</Description>
              <Weight>
                <ItemTitle>{t('weight')}</ItemTitle>{' '}
                <ItemValue>0.3 Caret</ItemValue>
              </Weight>
              <Avail>
                <ItemTitle>{t('available')}</ItemTitle>{' '}
                <ItemValue>{product.itemRemain}</ItemValue>
              </Avail>
              <ButtonWrapper>
                <Button>
                  <a href="tel:+959774070583">{t('contact_to_buy')}</a>
                </Button>
                <Icon>
                  <FavoriteBorder />
                </Icon>
              </ButtonWrapper>
            </DetailsWrapper>
          </Wrapper>
        )}
      </Container>
    </>
  );
};

export default Details;
