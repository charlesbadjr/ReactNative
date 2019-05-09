import React from 'react';
import './Style/Style.css';
import  Landing  from './Landing';
import Footer from './Footer';
import Navbar from './NavBar';



class App extends React.Component {
  
  render(){
    return (
       <div className="App"> 
           < Navbar  />
           < Landing />
           < Footer />
       </div>
    );
  }
}

export default App;
