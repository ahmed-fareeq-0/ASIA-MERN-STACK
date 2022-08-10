import React from 'react';
import './Products.scss'

import { DataProducts } from '../../data';

const ShowProducts = () => {
  return (
    <div className='ContainerShowProducts'>
    <h1 className='titleProducts'>المنتجات</h1>
    
    <div className='wrapper'>
            {DataProducts.map((item) => (
                <div className='Product'> 
                        <span></span>
                        <div className='productInfo'>
                            <h3 className='titleProduct'>{item.name}</h3>
                            <div className='descProduct'>{item.desc}</div>
                        </div>
                        <img className='imgProduct' src={item.img} alt='' />
                </div> 
            ))}
      </div>
    </div>
  );
}

export default ShowProducts;
