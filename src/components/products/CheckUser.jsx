import React from 'react';
import './Products.scss'

const CheckUser = () => {
  const token = localStorage.getItem('token')
  if(token){
    return (
      <div className='containerCheckUser'>
        <a href='/addProducts' className='checkUserButton'>أضف منتج</a>
      </div>
    )
  }
}

export default CheckUser;
