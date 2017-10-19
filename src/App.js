import React from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Home from './screens/Home';
import Gym from './screens/Gym';

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/gym">Gym</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/gym" component={Gym}/>
    </div>
  </BrowserRouter>
)
export default App;
