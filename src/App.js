import React from 'react';
import './App.css';
import Container from './components/Container';
import AppBar from './components/AppBar';
import WelcomeContainer from './components/WelcomeContainer';
import { Sticky } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
      <Sticky>
        <AppBar />
      </Sticky>
      <WelcomeContainer />
      <Container />
    </div>
  );
}

export default App;
