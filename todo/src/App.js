import React, {Component} from 'react';
import logo from './logo.svg';
import Form from './Form'
import List from './List'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      user: undefined,
      user: {},
      items: ['buy milk', 'clean apartment', 'do dishes']
    }
  }
  
  render() {  
    return (
      <div className="App">
        <h1>ToDo List</h1>
        <List items={this.state.items} numberOfItems={this.state.items.length}/>
        <Form/>
      </div>
    );
  }
}

export default App;
