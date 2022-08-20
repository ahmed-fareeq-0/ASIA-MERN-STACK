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

    <div className='container'>
      <div className='wrapper'>

      <div className='right'>
          <a className='link LinkLeft' href='#contect'>اتصل بنا</a>
          <a className='link' href='#about'>من نحن</a>
          <a className='link' href='#products'>المنتجات</a>
          <a className='link active' href='#about'>الرئيسية</a>
        </div>











{/* ------------------------------------------ */}
        <div className='wrpperResponsive'>
          <GiHamburgerMenu className='iconHamburger' onClick={ () => showHamburger()} />

          <a className='logoResponsive' href='/'><h1>اسيا</h1></a>
        </div>

        <div className='Hamburger' style={show ? {display:'flex'} : {display:'none'}} >
          <a className='link active' href='#about'>الرئيسية</a>
            <a className='link' href='#products'>المنتجات</a>
            <a className='link' href='#about'>من نحن</a>
            <a className='link' href='#contect'>اتصل بنا</a>
        </div>

{/* -------------------------------------- */}










        <div className='left'>
          <a className='logo' href='/'><h1>اسيا</h1></a>
        </div>

      </div>
    </div>
  );
}

export default Navbar;
