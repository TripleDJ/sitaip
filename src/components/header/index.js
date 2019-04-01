import React, { Component } from 'react';
import SocialLinks from './nav/social'

class Header extends Component {
  render() {
    return (
      <div class="top_bar">
      
        <div id="logo_wrapper">
          <SocialLinks />
        </div>
      </div> 
    );
  }
}

export default Header;
