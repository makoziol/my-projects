import React from 'react';
import './App.css';
import Container from './components/Container';
import AppBar from './components/AppBar';

function App() {
  return (
    <div className="App">
      <AppBar></AppBar>
      <Container />
    </div>
  );
}

export default App;
