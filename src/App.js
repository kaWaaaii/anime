import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header'
import Main from './components/Main/Main'

class App extends Component {
  render() {
    return (
      <div className="App-wrapper">
        <div className="App">
          <Header
              main='Главная'
              anime='Аниме'
              manga='Манга'
              community='Сообщество'
          />
          <Main/>

          <br/>
          Footer
        </div>
      </div>
    );
  }
}

export default App;
