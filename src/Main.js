import React from 'react';
import HornedBeast from "./HornedBeast";
// import dataBeasts from './data.json';
import Button from 'react-bootstrap/Button';
import CardColumns from 'react-bootstrap/CardColumns';
import { Row } from 'react-bootstrap';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      myWallet: 500
    }
  }

manageMyWallet = () => {
  this.setState({
    myWallet: this.state.myWallet - 5,
  });
}  

  render() {

    return (
      <main>
        <h2 onClick={this.props.handleShowModal}>More about the app</h2>

        <h3>Wallet Balance: ${this.state.myWallet}</h3>


        <Button variant="success">Click</Button>

        <CardColumns>
          <Row xs={1} md={2}>
            {this.props.data.map((beast, index) => (
              <HornedBeast
               handleMyWallet = {this.manageMyWallet}
               key={index} title={beast.title} description={beast.description} imageUrl={beast.image_url} />
            ))}
          </Row>
        </CardColumns>
      </main>
    )

  }

}

export default Main;
