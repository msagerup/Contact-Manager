import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from './Components/contacts/Contacts';
import Header from './Components/layout/Header';
import About from './Components/pages/About';
import AddContact from './Components/contacts/AddContact';
import NotFound from './Components/pages/NotFound';
import test from './Components/pages/test';
import './App.css';

import { Provider } from './Context';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/about" component={About} />
                <Route exact path="/add" component={AddContact} />
                <Route exact path="/test" component={test} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
