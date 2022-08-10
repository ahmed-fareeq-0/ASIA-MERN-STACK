import React from 'react';
import Content from '../components/content/Content';
import Navbar from '../components/navbar/Navbar';
import Product from '../components/products/Product';
import ShowProducts from '../components/products/ShowProducts';


const Home = () => {
  return (
    <div>
      <Navbar />
      <Content />
      <ShowProducts />
    </div>
  );
}

export default Home;
