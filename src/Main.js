import React from 'react';
import HornedBeast from "./HornedBeast";
// import dataBeasts from './data.json';
import Button from 'react-bootstrap/Button';
import CardColumns from 'react-bootstrap/CardColumns';
import { Row } from 'react-bootstrap';

class Main extends React.Component {
  render() {
    return (
      <main>
        <Button variant="success">Click</Button>
        <CardColumns>
          <Row xs={1} md={2}>
          {this.props.data.map((beast, index) => (
            <HornedBeast key={index} title={beast.title} description={beast.description} imageUrl={beast.image_url} />
          ))}
          </Row>
        </CardColumns>

      </main>
    )

  }

}

export default Main;
