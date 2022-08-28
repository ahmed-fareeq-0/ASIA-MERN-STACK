import React from 'react'
import './Products.scss'

function Product({ products }) {
  return (
    <div className='ContainerShowProducts' id='products'>
    <h1 className='titleProducts'>المنتجات</h1>
    
    <div className='wrapperShowProducts'>
            {products.map((item) => (
              <div className='wrapperProduct'  key={item._id} > 
                    <div className='ProductShow'>
                    <img className='imgProduct' src={item.image} alt='' />
                          <div className='productInfo'>
                              <h3 className='titleProduct'>{item.title}</h3>
                              <div className='descProduct'>{item.desc}</div>
                          </div> 
                    </div>
              </div> 
            ))}
      </div>
    </div>
  )
}

export default Product

{/* <div className='ProductShow' key={item._id} > 
                        
<img className='imgProduct' src={item.image} alt='' />
<div className='productInfo'>
    <h3 className='titleProduct'>{item.title}</h3>
    <div className='descProduct'>{item.desc}</div>
</div> 
</div>  */}