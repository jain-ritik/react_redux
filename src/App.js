import React from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from "./components/posts"
import Postform from "./components/postform"
import {Provider} from 'react-redux'
import store from './store'


class App extends React.Component {
  render() {
    return (
      <Provider store ={store}>
      <div className="App">
      
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
         <h3>Form submitting</h3>
         <p>RITIK</p>
        
        </header>
        <Postform />
        <hr />
        <Posts />
      </div>
      </Provider>
    );
  }
}

export default App;
