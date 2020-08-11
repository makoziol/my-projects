import React from 'react';
import './App.css';
import Container from './components/Container';
import AppBar from './components/AppBar';
import WelcomeContainer from './components/WelcomeContainer';

function App() {
  return (
    <div className="App">
      <AppBar></AppBar>
      <WelcomeContainer />
      <Container />
    </div>
  );
}

export default App;
