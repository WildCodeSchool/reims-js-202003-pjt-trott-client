import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Menu.css';

function Burger() {
  // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
  return (
    <Menu width="100vw" className="size">
      <a id="home" className="menu-item" href="/">Home</a>
      <a id="about" className="menu-item" href="/register">Register</a>
      <a id="contact" className="menu-item" href="/rank">Rank</a>
    </Menu>
  );
}

export default Burger;
