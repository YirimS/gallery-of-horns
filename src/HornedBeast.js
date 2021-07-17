import React from 'react';
import './HornedBeast.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likeCounter: 0
    };
  }

  plusOne = () => {
    this.setState({
      likeCounter: this.state.likeCounter + 1,
    })
  }

  subOne = () => {
    this.setState({
      likeCounter:  this.state.likeCounter - 1,
    })
  }

  likeCounterClicked = () => {
    this.setState({ likeCounter: this.state.likeCounter + 1 })
  };

  render() {
    return (
      <Card style={{width: "33rem", height: "33rem"}}>
        <Card.Img variant="top" onClick={this.likeCounterClicked} src={this.props.imageUrl} alt={this.props.title} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
          {this.props.description}
          <p>{this.state.likeCounter}</p>
          </Card.Text>
        </Card.Body>
        <Button variant="success" onClick={this.plusOne}>plusOne </Button>
        <Button variant="outline-primary" onClick={this.subOne}>subOne </Button>
      </Card>
    )
  }
}

export default HornedBeast;
