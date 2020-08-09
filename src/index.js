import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Ships from './components/Ships';
import Motorcycles from './components/Motorcycles';
import Miniatures from './components/Miniatures';
import Mounteneering from './components/Mounteneering';

const routing = (
  <Router>
    <Route exact path="/" component={App} />
    <Route path="/ships" component={Ships} />
    <Route path="/mountaineering" component={Mounteneering} />
    <Route path="/motorcycles" component={Motorcycles} />
    <Route path="/miniatures" component={Miniatures} />
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
