import React from 'react';
import './intro.css';
import bg from './home.png';
import btnImg from './hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section className="intro">
      <div className='homeSec'>
        <div className="home-content">
          <h3>Web Developer</h3>
          <h1>Hi, I'm Pratik Kumar Singh</h1>
          <h2>From India</h2>

          <Link><button className='btn'><img src={btnImg} alt='Hire Me' className='btnImg' />Hire Me</button></Link>

          <div className="introIcons">
            <a href="https://github.com/PratikKumarSingh2503"><i class="fa-brands fa-github"></i></a>
            <a href="https://twitter.com/PratikSingh819"><i class="fa-brands fa-twitter"></i></a>
            <a href="https://www.linkedin.com/in/pratik-kumar-singh-aa6746221/"><i class="fa-brands fa-linkedin"></i></a>
          </div>
        </div>

        <img src={bg} alt='Profile' className='bg' />
      </div>
    </section>
  );
}

export default Intro;