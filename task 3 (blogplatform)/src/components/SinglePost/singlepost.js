import React from 'react';
import raiden from '../../assests/raiden.jpg';
import './singlepost.css';

const Singlepost = () => {
  return (
    <div className='singlepost'>
      <div className='singlepostWrap'>
        <img className='singlepostImg' src={raiden} alt='' />
      </div>
      <h1 className='singlepostTitle'>
        Lorem ipsum dolor sit amet
        <div className='singlepostEdit'>
          <i className="singlepostIcon far fa-edit"></i>
          <i className="singlepostIcon far fa-trash-alt"></i>
        </div>
      </h1>
      <div className='singlepostInfo'>
        <span className='singlepostAuthor'>
          Author: <b>Pratik</b>
        </span>
        <span className='singlepostDate'>1 hour ago</span>
      </div>
      <p className='singlepostDesc'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quidem ducimus totam reprehenderit odio odit,
        aliquid reiciendis dolorem tenetur provident praesentium nihil iusto non doloremque delectus architecto.
        Cupiditate, quod asperiores?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quidem ducimus totam reprehenderit odio odit,
        aliquid reiciendis dolorem tenetur provident praesentium nihil iusto non doloremque delectus architecto.
        Cupiditate, quod asperiores?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quidem ducimus totam reprehenderit odio odit,
        aliquid reiciendis dolorem tenetur provident praesentium nihil iusto non doloremque delectus architecto.
        Cupiditate, quod asperiores?
      </p>
    </div>
  );
}

export default Singlepost;