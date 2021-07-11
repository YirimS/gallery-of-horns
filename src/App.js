// deleted import logo.svg
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

import './App.css';

class App extends React.Component {
  render() {
    // you may only return one parent
    return (
      <>
        <Header />
        <img src="./horn-beatle.jpeg" alt="discription"></img>
        <Main 
          title="Little Beast"
          description="These are horn Beatles!" 
        />
        <img src="./rhino-beatle.jpeg" alt="discription"></img>
        <Main 
          title="Another Little Beast"
          description=" another Horn Beatle Hanging!" 
        />
        <Footer />
      </>
    )
  }
}

export default App;
