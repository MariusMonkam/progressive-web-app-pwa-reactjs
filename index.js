import React, { Component } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home'
import './style.css';

class App extends Component {

  render() {
    return (
      <div>
       <Home />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
