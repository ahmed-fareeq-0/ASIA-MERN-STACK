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
          <a className='link' href='/'>الرئيسية</a>
          <a className='link' href='/'>المنتجات</a>
          <a className='link' href='/'>من نحن</a>
          <a className='link' href='/'>اتصل بنا</a>
        </div>

        

      </div>
    </div>
  );
}

export default Navbar;
