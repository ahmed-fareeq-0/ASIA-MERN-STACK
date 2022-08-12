import React from 'react';
import './styleContect.scss'
import {BsFacebook, BsInstagram, BsTelegram} from 'react-icons/bs'

const Contect = () => {
  return (
    <div className='containerContect' id='contect'>
    <h1 className='titleContect'>أتصل بنا</h1>
      <div className='wrapper'>
        <div className='icons'>
        <BsFacebook className='icon'/>
        <BsInstagram className='icon'/>
        <BsTelegram className='icon'/>
        </div>

        <form className='form'>
            <input type='text' placeholder='الأسم' />
            <input type='email' placeholder='البريد الأكتروني' />
            <textarea placeholder="اكتب رسالتك هنا " tabindex="5" required></textarea>

            <button>ارسال</button>
        </form>


      </div>
    </div>
  );
}

export default Contect;
