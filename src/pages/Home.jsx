import React from 'react';
import Content from '../components/content/Content';
import Navbar from '../components/navbar/Navbar';
import Product from '../components/products/Product';


const Home = () => {
  return (
    <div>
      <Navbar />
      <Content />
      <Product />
    </div>
  );
}

export default Home;
