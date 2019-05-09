import React, { Component } from 'react';
import {Segment, Header, Icon } from 'semantic-ui-react';

class Footer extends Component {

  render(){
      return(
         <div className="footer">
             <Header as="h3" textAlign='center'> A Charlie website 2019 </Header>
         </div>
      );
  }
}


export default Footer;