import React from 'react';
import $ from 'jquery';
import { NavLink } from 'react-router-dom';

export default class Nav extends React.Component {
  componentDidMount() {
    var nav = document.getElementById('nav');
    if ($('#header')[0] != null) {
      nav.classList.remove('solid-nav');
      $(window).scroll(function() {
        var scroll = $(window)[0].scrollY;
        var headerHeight = ($('#header')[0].clientHeight - $('#nav')[0].clientHeight);
  
        if (scroll >= headerHeight) {
          nav.classList.add('solid-nav');
        } else {
          nav.classList.remove('solid-nav');
        }
      });
    } else {
      nav.classList.add('solid-nav');
    }
  }

  render() {
    return(
      <div id='nav'>
        <NavLink className='nav-item' to='/'>APC</NavLink>
        <NavLink className='nav-item' to='/events'>Events</NavLink>
        <NavLink className='nav-item' to='/armoury'>Armoury</NavLink>
      </div>
    );
  }
}

