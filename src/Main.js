import React from 'react';
import HornedBeast from "./HornedBeast";
import Button from 'react-bootstrap/Button';
import CardColumns from 'react-bootstrap/CardColumns';
import { Row } from 'react-bootstrap';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 100,
    }
  }

  walletBalance = () => {
    this.setState({
      balance: this.state.balance - 5,
    });
  }

  render() {
    return (
      <main>
        <Button variant="success">Click</Button>
        <CardColumns>

          <h3>balance: ${this.state.balance}</h3>

          <Row xs={1} md={2}>
            {this.props.data.map((beast, index) => (
              <HornedBeast
                balanceProperty={this.walletBalance}
                key={index} title={beast.title} description={beast.description} imageUrl={beast.image_url} />
            ))}

          </Row>
        </CardColumns>

      </main>
    )

  }

}

export default Main;
