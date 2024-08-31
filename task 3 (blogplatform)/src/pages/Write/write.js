import React from 'react';
import raiden from '../../assests/raiden.jpg';
import './write.css';

const Write = () => {
  return (
    <div className='write'>
      <img className='writeImg' src={raiden} alt='' />
      <form className='writeForm'>
        <div className='writeFormGroup'>
          <label htmlFor='fileInput'>
            <i className='writeIcon fas fa-plus'></i>
          </label>
          <input type='file' id='fileInput' style={{display:"none"}}/>
          <input className='writeInput' type='text' placeholder='Title' autoFocus={true} />
        </div>
        <div className='writeFormGroup'>
          <textarea placeholder='Tell your story...' type='text' className='writeInput writeText' ></textarea>
        </div>
        <button className='writeSubmit'>Publish</button>
      </form>
    </div>
  );
}

export default Write;