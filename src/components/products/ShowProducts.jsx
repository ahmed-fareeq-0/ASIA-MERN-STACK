

import React from 'react';
import jwt from 'jwt-decode';

import Product from './Product';
import AdminProduct from './AdminProduct';

const ShowProducts = ({ products }) => {
  const token = localStorage.getItem("token");
  if (token) {
    const user = jwt(token);
    console.log(user);
    if (user) {
      // eslint-disable-next-line
      return <AdminProduct products={ products }/>
    }
  } else {
    // eslint-disable-next-line
    return <Product products={ products }/>
  }
}

export default ShowProducts;
