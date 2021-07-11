import React from 'react';
import HornedBeast from "./HornedBeast";

class Main extends React.Component{
  render(){
    return(
      <main>
        <HornedBeast title="Little Beast" description="These are horn Beatles!" imageUrl="./horn-beatle.jpeg"/>
        <HornedBeast title="Another Little Beast" description=" another Horn Beatle Hanging!" imageUrl="./rhino-beatle.jpeg"/>
      </main>
    )
    
  }

}

export default Main;
