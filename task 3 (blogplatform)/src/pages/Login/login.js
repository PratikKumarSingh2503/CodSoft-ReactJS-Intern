import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='login'>
      <span className='loginTitle'>Login</span>
      <div className='loginForm'>
        <label>Email</label>
        <input className='loginInput' type='email' placeholder='Enter your email...' />
        <label>Password</label>
        <input className='loginInput' type='password' placeholder='Enter your password...' />
        <button className='loginBut'>Login</button>
      </div>
      <button className='loginRegisBut'>
        <Link to="/register">Register</Link>
      </button>
    </div>
  );
}

export default Login;