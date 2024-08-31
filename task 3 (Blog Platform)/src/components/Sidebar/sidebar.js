import React from 'react';
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
        <img src='' alt='' />
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quidem ducimus totam reprehenderit odio odit,
        aliquid reiciendis dolorem tenetur provident praesentium nihil iusto non doloremque delectus architecto.
        Cupiditate, quod asperiores?
        </p>
      </div>

      <div className='sidebarItem'>
        <span className='sidebarTitle'>CATEGORIES</span>
        <ul className='sidebarList'>
          <li className='sidebarListItem'>Sword</li>
          <li className='sidebarListItem'>Catalyst</li>
          <li className='sidebarListItem'>Claymore</li>
          <li className='sidebarListItem'>Polearm</li>
          <li className='sidebarListItem'>Bow</li>
        </ul>
      </div>

      <div className='sidebarItem'>
        <span className='sidebarTitle'>ELEMENTS</span>
        <ul className='sidebarList'>
          <li className='sidebarListItem'>Anemo</li>
          <li className='sidebarListItem'>Geo</li>
          <li className='sidebarListItem'>Electro</li>
          <li className='sidebarListItem'>Dendro</li>
          <li className='sidebarListItem'>Hydro</li>
          <li className='sidebarListItem'>Cryo</li>
          <li className='sidebarListItem'>Pyro</li>
        </ul>
      </div>

      <div className='sidebarItem'>
        <span className='sidebarTitle'>FOLLOW US</span>
        <div className='sidebarSocial'>
          <i className="sidebarIcon fa-brands fa-github"></i>
          <i className="sidebarIcon fa-brands fa-twitter"></i>
          <i className="sidebarIcon fa-brands fa-linkedin"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;