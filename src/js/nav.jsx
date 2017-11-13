import React from 'react';
import ReactDOM from 'react-dom';

export default class Nav extends React.Component {
  componentDidMount() {
    $(window).scroll(function() {
      var scroll = $(window)[0].scrollY;
      var headerHeight = ($('#header')[0].clientHeight - $('#nav')[0].clientHeight);
      var nav = document.getElementById('nav');

      if (scroll >= headerHeight) {
        nav.classList.add('solid-nav');
      } else {
        nav.classList.remove('solid-nav')
      }
    });
  }

  render() {
    return(
      <div id='nav'>
        <div className='nav-item'>APC</div>
        <div className='nav-item'>Armoury</div>
      </div>
    );
  }
}

