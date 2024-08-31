import React from 'react';
import './topbar.css';
import profile_pic from './profile_pic.png';
import { Link } from 'react-router-dom';

const Topbar = () => {
    const user = false;

    return (
        <div className='nav'>
            <div className='left'>
                <h3>G<span>Impact</span></h3>
            </div>

            <div className='middle'>
                <li>
                    <Link to="/" className='midlink'>HOME</Link>
                </li>
                <li>
                    <Link to="/" className='midlink'>ABOUT</Link>
                </li>
                <li>
                    <Link to="/" className='midlink'>CONTACT</Link>
                </li>
                <li>
                    <Link to="/write" className='midlink'>WRITE</Link>
                </li>
                <li>
                    <Link to="/" className='midlink'>{user && 'LOGOUT'}</Link>
                </li>
            </div>

            <div className='right'>
                {user ? (
                    <div className='sub-right1'>
                        <img className='right-img' src={profile_pic} alt='' height={50} width={50} />
                    </div>
                ) : (
                    <div className='right2'>
                        <li>
                            <Link to="/login" className='rightlink'>LOGIN</Link>
                        </li>
                        <li>
                            <Link to="/register" className='rightlink'>REGISTER</Link>
                        </li>
                    </div>
                )
                }
                <i className='topSearchIcon fas fa-search' />
            </div>
        </div>
    );
}

export default Topbar;