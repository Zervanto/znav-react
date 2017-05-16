import React, { Component } from 'react';
import './App.css';
import Header from './js/header.js'
import Search from './js/search.js'
class App extends Component {
  render(){
    return <div>
        <Header/>
        <Search/>
    </div>
  }
}

export default App;
