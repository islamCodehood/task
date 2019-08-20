import React, { Component } from 'react';
import Header from './components/Header'
import Form from './components/Form'
import OutputList from './components/OutputList'
import './App.css';

class App extends Component {
  state = {  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <Form />
        <OutputList />
      </div>
    );
  }
}

export default App;
