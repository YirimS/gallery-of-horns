// deleted import logo.svg
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

import './App.css';

class App extends React.Component{
  render() {
    // you may only return one parent
    return (
      <>
        <Header />
        {/* <img src="where" alt="discription"></img> */}
        <Main/>

        <Main/>
        <Footer />
      </>
    )
  }
}

export default App;
