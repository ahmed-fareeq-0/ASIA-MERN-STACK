import React from 'react';
import './Products.scss'

import { DataProducts } from '../../data';

const ShowProducts = () => {
  return (
    <div className='ContainerShowProducts' id='products'>
    <h1 className='titleProducts'>المنتجات</h1>
    
    <div className='wrapper'>
            {DataProducts.map((item) => (
                <div className='Product'> 
                        {/* <span></span> */}
                        <img className='imgProduct' src={item.img} alt='' />
                        <div className='productInfo'>
                            <h3 className='titleProduct'>{item.name}</h3>
                            <div className='descProduct'>{item.desc}</div>
                        </div>
                        
                </div> 
            ))}
      </div>
    </div>
  );
}

export default ShowProducts;
