import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import DonatePage from './pages/donate'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/donate" component={DonatePage} exact />
      </Switch>
    </Router>
    
  );
}

export default App;
