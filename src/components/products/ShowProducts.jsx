import React from 'react';
import './Products.scss'
import { DataProducts } from '../../data';
import CheckUser from './CheckUser';

const ShowProducts = () => {
  return (
    <div className='ContainerShowProducts' id='products'>
    <h1 className='titleProducts'>المنتجات</h1>
    
    <div className='wrapper'>
            {DataProducts.map((item) => (
                <div className='Product' key={item.id}> 
                        {/* <span></span> */}
                        <img className='imgProduct' src={item.img} alt='' />
                        <div className='productInfo'>
                            <h3 className='titleProduct'>{item.name}</h3>
                            <div className='descProduct'>{item.desc}</div>
                        </div>
                        
                </div> 
            ))}

            <CheckUser/>
      </div>
    </div>
  );
}

export default ShowProducts;
