import React from 'react';
// import './Nav.css';

const Nav = () => {
   return (
   <nav className="dt w-100 border-box pa3 ph5-ns">
        <a className="dtc v-mid mid-gray link dim w-25" href="#" title="Home">
          <img src="http://tachyons.io/img/logo.jpg" className="dib w2 h2 br-100" alt="Site Name" />
        </a>
      <div className="dtc v-mid w-75 tr">
          <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#" title="About">About</a>
          <a className="link dim dark-gray f6 f5-ns dib" href="#" title="Sign In">Sign In</a>
      </div>
   </nav>
   )
}

export default Nav;
