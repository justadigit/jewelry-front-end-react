import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BACK from '../images/back3.jpg';
const Container = styled.div`
  width: 80%;
  height: 650px;
  background-image: url(${BACK});
  background-size: cover;
  margin: 20px auto 0 auto;
  display: flex;
`;
const Group = styled.div`
  width: 60%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Header = styled.h1`
  color: #fff;
  text-shadow: 1px 1px 1px #000000;
  font-weight: bold;
  font-size: 60px;
`;
const Paragraph = styled.p`
  color: #fff;
  text-shadow: 1px 0px 1px rgba(0, 0, 0, 0.77);
  line-height: 30px;
  margin: 25px 0;
  width: 90%;
  font-weight: 600;
`;

const ButtonGroup = styled.div`
  display: flex;
  width: 60%;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 10px 20px;
  margin-left: 20px;
  font-size: 20px;
  font-weight: 600;
  border: 2px solid #ffc300;
  border-radius: 5px;
  display: flex;
  background: white;
  color: #003566;
  -webkit-box-shadow: 5px 1px 15px 5px rgba(0, 0, 0, 0.24);
  box-shadow: 5px 1px 15px 5px rgba(0, 0, 0, 0.24);
  cursor: pointer;
`;
const Intro = () => {
  return (
    <Container>
      <Group>
        <Header> All the best for a whole lot less!</Header>
        <Paragraph>
          Discover over 80,000 earth-grown and lab-grown diamonds to create your
          dream engagement ring. Explore our unique shopping tools to help you
          find the best ring for your budget & enjoy free shipping and returns.
        </Paragraph>
        <ButtonGroup>
          <Button>
            <Link
              to="/user/:uId"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              Sale Now
            </Link>
          </Button>
          <Button>
            <Link to="/shop" style={{ textDecoration: 'none', color: 'black' }}>
              Buy Now
            </Link>
          </Button>
        </ButtonGroup>
      </Group>
    </Container>
  );
};

export default Intro;
