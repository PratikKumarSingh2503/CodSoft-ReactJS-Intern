import React from 'react';
import raiden from '../../assests/raiden.jpg';
import './post.css'

const Post = () => {
  return (
    <div className='post'>
      <img className='postImg' src={raiden} alt='' />
      <div className='postInfo'>
        <div className='postCats'>
          <span className='postCat'>Polearm</span>
          <span className='postCat'>Electro</span>
        </div>
        <span className='postTitle'>
          Lorem ipsum dolor sit amet
        </span>
        <hr />
        <span className='postDate'>1 hour ago</span>
      </div>
      <p className='postDesc'>
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

export default Post;