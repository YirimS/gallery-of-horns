import React from 'react';
import './HornedBeast.css';

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
      <section>
        <h2>{this.props.title}</h2>
        <img onClick={this.likeCounterClicked} src={this.props.imageUrl} alt={this.props.title}></img>
        <p>{this.props.description}</p>
        {/* displays the value if state */}
        <p>
          {this.state.likeCounter}
        </p>
        <button onClick={this.plusOne}>plusOne </button>
        <button onClick={this.subOne}>subOne </button>

      </section>
    )
  }
}

export default HornedBeast;
