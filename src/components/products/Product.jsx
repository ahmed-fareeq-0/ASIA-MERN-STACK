import React from 'react';
import ShowProducts from './ShowProducts'
import { DataProducts } from '../../data';





const Product = () => {
  return (
    <>

      {DataProducts.map( (item) => (
        <ShowProducts item={item}  />
      ))}

    </>
  );
}

export default Product;
