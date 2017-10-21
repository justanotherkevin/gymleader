import React from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import Header from './components/header'
import './App.css';

import Home from './screens/Home';
import Gym from './screens/Gym';

const App = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/gym" component={Gym}/>
    </div>
  </BrowserRouter>
)
export default App;
