import React from 'react';
import './styleNavbar.scss'


const Navbar = () => {
  return (
    <div className='container'>
      <div className='wrapper'>

        <div className='left'>
          <a className='logo' href='/'><h1>اسيا</h1></a>
        </div>

        <div className='right'>
          <a className='link active' href='/'>الرئيسية</a>
          <a className='link' href='#products'>المنتجات</a>
          <a className='link' href='#aboute'>من نحن</a>
          <a className='link' href='#contect'>اتصل بنا</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
