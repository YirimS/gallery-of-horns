// deleted import logo.svg
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './data.json';
// import form from './react-bootstrap/form';

import Modal from 'react-bootstrap/Modal';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    }
  }

  handleShowModal = () => {
    this.setState({
      showModal: true,
    });
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false,
    });
  }

  render() {
    return (
      <>
        <Header />
        {/* <h2 onClick={this.handleShowModal}>More about the app</h2> */}
        <Modal show={this.state.showModal} onHide={this.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>It works if this pops up.</Modal.Title>
          </Modal.Header>
          <Modal.Body>Pick a Beast</Modal.Body>
        </Modal>
        <Main data={data} handleShowModal={this.handleShowModal} />
        <Footer />
      </>
    )
  }
}
export default App;
