import React from 'react';

class HornedBeast extends React.Component{
  render(){
    return(
      <section>
        <h2>{this.props.title}</h2>
        <img src={this.props.imageUrl} alt={this.props.title}></img>
        <p>{this.props.description}</p>
      </section>
    )
  }
}

export default HornedBeast;
