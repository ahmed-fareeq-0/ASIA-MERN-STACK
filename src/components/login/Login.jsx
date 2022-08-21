import React from 'react';
import './styleLogin.scss'

const Login = () => {
  return (
    <div className='containerLogin'>

        <h1 className='titleLogin'>تسجيل الدخول</h1>
      <div className='wrapper'>

      <form className='form'>
            <input type='text' placeholder='أسم المستخدم' />
            <input type='password' placeholder='كلمة المرور' />
            

            <button>تسجيل الدخول</button>
        </form>

      </div>
    </div>
  );
}

export default Login;

