import React, { Component } from 'react';
import Header from './components/Header'
import Form from './components/Form'
import OutputList from './components/OutputList'
import './App.css';

class App extends Component {
  state = { 
    items: []
   }

  addItem = (title, link, summary) => {
    const item = {
      title,
      link,
      summary
    }
    console.log(title, link, summary)
    this.setState(prevState => ({
      items: [item].concat(prevState.items)
    }))
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Form addItem={this.addItem} />
        <OutputList itemsList={this.state.items} />
      </div>
    );
  }
}

export default App;
