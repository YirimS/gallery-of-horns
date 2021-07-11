import React from 'react';

class Main extends React.Component{
  render(){
    return(
      <main>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
      </main>
    )
    
  }

}

export default Main;
