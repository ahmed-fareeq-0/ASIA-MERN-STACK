import './styleLogin.scss'
import axios from 'axios'
import { useState } from 'react';


const Login = () => {

  const [user, setUser] = useState({
    username: "",
    password: ""
  })

  
  const handleChange = (e) => {
    e.preventDefault();
    const newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser)
  }

  const loginUser = async (e) => {
    e.preventDefault()
    await axios.post('https://asiapaint-server.herokuapp.com/admin/login', user).then(
      (res) => {
        if (res.data === "bad passowrd" || res.data === "User NOT Found!!!") {
          alert(res.data)
        } else {
          window.location.assign("/");
          localStorage.setItem("token", res.data.token);
        }
      }
    )

  }

  return (
    <div className='containerLogin'>

      <h1 className='titleLogin'>تسجيل الدخول</h1>

      <div className='wrapper'>
        <form className='form'>
          <input 
              type='username'
              name='username'
              placeholder='أسم المستخدم'
              value={user.userName}
              onChange={handleChange} 
              required
              />

          <input 
              type='password' 
              name='password'
              value={user.password}
              placeholder='كلمة المرور'
              onChange={handleChange}
              required
              />
          <button onClick={loginUser}>تسجيل الدخول</button>
        </form>
      </div>
    </div>
  );
}

export default Login;

