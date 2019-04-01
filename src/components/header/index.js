import React, { Component } from 'react';
import SocialLinks from './social';
import RightButton from './right_button';
import Logo from './logo';
import Menu from './menu';

class Header extends Component {
  render() {
    return (
    	<div id="wrapper">
    		<div className="header_style_wrapper">
		      <div className="top_bar">

		        <div id="logo_wrapper">
		          <SocialLinks />
		          <RightButton />
		          <Logo />
		        </div>

		        <div id="menu_wrapper">
		        	<Menu />
		        </div>

		      </div>
    		</div>
    	</div>
    );
  }
}

export default Header;
