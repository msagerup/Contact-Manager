import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Components/Contact';
import Header from './Components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <Contact name="Magnus" email="dfds@gdg.no" phone="5113-6643" />
          <Contact name="Eimear" email="eimear@fgf.no" phone="5453-4543" />
        </div>
      </div>
    );
  }
}

export default App;
