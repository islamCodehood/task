import React, { Component } from 'react';
import Header from './components/Header'
import Form from './components/Form'
import OutputList from './components/OutputList'
import './App.css';

class App extends Component {
  state = { 
    items: []
   }

  addItem = (title, link, summary, timestamp) => {
    const item = {
      title,
      link,
      summary,
      timestamp
    }
    console.log(title, link, summary)
    this.setState(prevState => ({
      items: [item].concat(prevState.items)
    }))
  }

  removeItem = timestamp => this.setState(prevState => ({
    items: prevState.items.filter(item => item.timestamp !== timestamp)
  }))
  
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
