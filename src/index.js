import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Ships from './components/Ships';
import Motorcycles from './components/Motorcycles';
import Mounteneering from './components/Mounteneering';
import TouristTrophy from './components/TouristTrophy';
import CraigTara from './components/CraigTara';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers/index';

let store = createStore(allReducers);

const routing = (
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={App} />
      <Route path="/home" component={App} />
      <Route path="/ships" component={Ships} />
      <Route path="/mountaineering" component={Mounteneering} />
      <Route path="/motorcycles" component={Motorcycles} />
      <Route path="/Tourist Trophy" component={TouristTrophy} />
      <Route path="/Craig Tara" component={CraigTara} />
    </Router>
  </Provider>
);

ReactDOM.render(routing, document.getElementById('root'));
