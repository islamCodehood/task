import React, { Component } from 'react';
import Header from './components/Header'
import Form from './components/Form'
import OutputList from './components/OutputList'
import './App.css';

class App extends Component {
  state = { 
    items: []
   }

  addItem = (title, link, summary, timeStamp) => {
    const item = {
      title,
      link,
      summary,
      timeStamp
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
        <OutputList itemsList={this.state.items} removeItem={this.removeItem} />
      </div>
    );
  }
}

export default App;
