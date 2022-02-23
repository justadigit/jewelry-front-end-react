import { useEffect, useState } from 'react';
import Category from '../components/Category';
import HeadNavbar from '../components/HeadNavbar';
import Navbar from '../components/Navbar';
import Intro from './Intro';
import Product from './Product';

const Home = () => {
  return (
    <div>
      <HeadNavbar />
      <Navbar />
      <Category />
      <Intro />
      <Product />
    </div>
  );
};

export default Home;
