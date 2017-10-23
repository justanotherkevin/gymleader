import React from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import Header from './components/header';
import './stylesheets/app.css';

import Home from './pages/Home';
import Gym from './pages/Gym';

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
