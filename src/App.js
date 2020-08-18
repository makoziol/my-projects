import React from 'react';
import './App.css';
import Container from './components/Container';
import AppBar from './components/AppBar';
import WelcomeContainer from './components/WelcomeContainer';
import { Sticky } from 'semantic-ui-react';
import { iOS } from './helpers';

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundAttachment: iOS() ? 'initial' : '',
        minHeight: `${window.innerHeight}px`
      }}
    >
      <Sticky>
        <AppBar />
      </Sticky>
      <WelcomeContainer />
      <Container />
    </div>
  );
}

export default App;
