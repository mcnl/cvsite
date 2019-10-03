import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <table>
          <Row>TestingA</Row>
          <Row>TestingB</Row>
          <Row>TestingA</Row>
        </table>
      </header>
    </div>
  );
}

export default App;