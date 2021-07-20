// deleted import logo.svg
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './data.json';

import Modal from 'react-bootstrap/Modal';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: true,
    }
  }

  render() {
    return (
      <>
        <Header />
        <Modal showModal={this.state.showModal}>
          <Modal.Title>Proof of Life</Modal.Title>
        </Modal>
        <Main data={data} />
        <Footer />
      </>
    )
  }
}
export default App;
