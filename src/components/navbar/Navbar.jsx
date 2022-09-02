import {useRef} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'

import './styleNavbar.scss'
import logo from './logo.png'


var one = 0;

function click1() { 
  one++;

  setTimeout(function reset() {
    one = 0;
  }, 500);

  if (one === 3) {
    window.location.assign('/login')
  }
}
const Navbar = () => {

  const navRef = useRef()

  const showNavbar = () => {
    navRef.current.classList.toggle('responive_nav')
  }

  return (
    <header className='containerNavbar'>

    <nav ref={navRef}>

        <a onClick={showNavbar} className='linkNav' href='#contact'>اتصل بنا</a>
        <a onClick={showNavbar} className='linkNav' href='#about'>من نحن</a>
        <a onClick={showNavbar} className='linkNav' href='#products'>المنتجات</a>
        <a className='linkNav activeLink' href='#content' onClick={click1} >الرئيسية</a>
        
        <button className='nav-btn nav-close-btn' onClick={showNavbar}> <FaTimes /> </button>
    </nav>
    
    <button className='nav-btn' onClick={showNavbar} > <FaBars /> </button>

    <a className='logo' href='/'><img src={ logo } alt="#" height={ '60px' }/></a>
    </header>
  );
}

export default Navbar;

