import React, { Component } from 'react';
import './assets/app.css';

import MobileMenu from './components/header/mobile_menu'
import Header from './components/header/index'
import Home from './components/home/index'
import Footer from './components/footer/index'

class App extends Component {
  render() {
    return (


        
      <div className="App">
        <MobileMenu />
        <Header />
      </div>


        // <Home />

        //<Footer />
    );
  }
}

export default App;
