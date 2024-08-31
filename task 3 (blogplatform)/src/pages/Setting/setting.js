import React from 'react';
import './setting.css';
import Sidebar from '../../components/Sidebar/sidebar';


const Setting = () => {
    return (
        <div className='setting'>
            <div className='setWrap'>
                <div className='setTitle'>
                    <span className='setUpadateTitle'>Update Your Account</span>
                    <span className='setDeleteTitle'>Delete Account</span>
                </div>
                <form className='setForm'>
                    <label>Profile Picture</label>
                    <div className='setPP'>
                        <img src='' alt='' />
                        <label htmlFor='fileInput'>
                            <i className='setPPIcon far fa-user-circle'></i>
                        </label>
                        <input type='file' id='fileInput' style={{ display: 'none' }} />

                    </div>
                    <label>Username</label>
                    <input type='text' placeholder='Pratik' />
                    <label>Email</label>
                    <input type='email' placeholder='loshan634@gmail.com' />
                    <label>Password</label>
                    <input type='password' />
                    <button className='setSubmit'>Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    );
}

export default Setting;