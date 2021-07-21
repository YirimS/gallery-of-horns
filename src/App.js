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

  handleShowModal = () => {
    this.setState({
      showModal: true,
    });
  }

  render() {
    return (
      <>
        <Header />
        <Modal show={this.state.showModal}>
          <Modal.Header>
            <Modal.Title>Proof of Life</Modal.Title>
          </Modal.Header>
          <Modal.Body>This is the body of the</Modal.Body>
        </Modal>
        <Main data={data} />
        <Footer />
      </>
    )
  }
}
export default App;
