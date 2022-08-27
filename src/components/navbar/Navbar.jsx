import './styleNavbar.scss'
import {GiHamburgerMenu} from 'react-icons/gi'
import { useState } from 'react'




const Navbar = () => {

  const [show, setShow] = useState(false)

  // sohw Hamburger 
  const showHamburger = () => {
    setShow(!show)
  } 

  return (

    <div className='containerNavbar'>
      <div className='wrapperNavbar'>

      <div className='rightNavbar'>
          <a className='link LinkLeft' href='#contact'>اتصل بنا</a>
          <a className='link' href='#about'>من نحن</a>
          <a className='link' href='#products'>المنتجات</a>
          <a className='link active' href='#content'>الرئيسية</a>
        </div>

        
        <div className='wrpperResponsiveNavbar'>
          <GiHamburgerMenu className='iconHamburger' onClick={ () => showHamburger()} />

          <a className='logoResponsive' href='/'><h1>اسيا</h1></a>
        </div>

        <div className='HamburgerNavbar' style={show ? {display:'flex'} : {display:'none'}} >
          <a className='link active' href='#content'>الرئيسية</a>
            <a className='link' href='#products'>المنتجات</a>
            <a className='link' href='#about'>من نحن</a>
            <a className='link' href='#contact'>اتصل بنا</a>
            
        </div>

        <div className='leftNavbar'>
          <a className='logo' href='/'><h1>اسيا</h1></a>
        </div>

      </div>
    </div>
  );
}

export default Navbar;
