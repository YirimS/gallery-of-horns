import React from 'react';
import HornedBeast from "./HornedBeast";
import dataBeasts from './data.json';

class Main extends React.Component{
  render(){
    return(
      <main>
        {dataBeasts.map((beast, index) => (
          <HornedBeast key={index} title={beast.title} description={beast.description} imageUrl={beast.image_url}/>
        ))}
      
      </main>
    )
    
  }

}

export default Main;
