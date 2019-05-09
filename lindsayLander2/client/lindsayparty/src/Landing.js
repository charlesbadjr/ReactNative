import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import Clock from './Clock';

class Landing extends Component {

  render(){
      return(
         <div className="landing">
            <div className="centerThis" > 
                <Header as="h1" textAlign="center"> Adventure Begins July 20, 2019 </Header>
                < Clock />
            </div>
         </div>
      );
  }
}


export default Landing;
