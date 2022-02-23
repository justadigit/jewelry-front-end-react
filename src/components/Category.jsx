import axios from 'axios';
import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LocalContext } from '../App';
const Container = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
`;
const Header = styled.span`
  padding: 10px 15px;
  background: #ffd60a;
  color: #000814;
  font-weight: 600;
`;
const List = styled.ul`
  display: flex;
  list-style: none;
  margin-left: 15px;
`;
const ListItem = styled.li`
  margin-left: 1px;
  padding: 5px;
  background-color: #e8e8e8;
  cursor: pointer;
`;

const Category = () => {
  const [t] = useContext(LocalContext);
  const [categories, setcategorie] = useState([]);
  useEffect(() => {
    axios
      .get('https://jewelry-second-step.herokuapp.com/admin/all-categories')
      .then((response) => {
        setcategorie(response.data.result);
      });
  }, [categories]);
  return (
    <Container>
      <Header>{t('ccategories')} : </Header>
      <List>
        {categories.map((category) => (
          <ListItem key={category._id}>
            <Link
              style={{ textDecoration: 'none', color: 'black' }}
              to={`/category/${category._id}`}
            >
              {category.title}
            </Link>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Category;
