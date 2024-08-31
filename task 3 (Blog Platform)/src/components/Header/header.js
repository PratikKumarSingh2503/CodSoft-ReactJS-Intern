import React from 'react';
import './header.css';
import headerImg from '../../assests/headerImg.jpg';

const Header = () => {
  return (
    <div className='header'>
        <div className='headerTitle'>
            <span className='title1'>Yours Lovely</span>
            <span className='title2'>Blog</span>
        </div>
        <img className='headerImg' src={headerImg} alt='' />
    </div>
  );
}

export default Header;