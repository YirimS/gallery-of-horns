import React from 'react';
import HornedBeast from "./HornedBeast";
import dataBeasts from './data.json';
import Button from 'react-bootstrap/Button';

class Main extends React.Component{
  render(){
    return(
      <main>
        <Button>Click</Button>
        {dataBeasts.map((beast, index) => (
          <HornedBeast key={index} title={beast.title} description={beast.description} imageUrl={beast.image_url}/>
        ))}
      
      </main>
    )
    
  }

}

export default Main;
