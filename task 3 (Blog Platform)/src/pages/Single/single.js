import React from 'react';
import './single.css';
import Singlepost from '../../components/SinglePost/singlepost';
import Sidebar from '../../components/Sidebar/sidebar';

const Single = () => {
  return (
    <div className='single'>
        <Singlepost />
        <Sidebar />
    </div>
  );
}

export default Single;