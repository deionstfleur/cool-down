import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import DonatePage from './pages/donate'
import AboutPage from './pages/about'
import ServicesPage from './pages/services'
import ContactPage from './pages/contact'
import MembersPage from './pages/members 2'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/donate" component={DonatePage} exact />
          <Route path="/About" component={AboutPage} exact />
          <Route path="/Services" component={ServicesPage} exact />
          <Route path="/Members" component={MembersPage} exact />
          <Route path="/Contact" component={ContactPage} exact />
      </Switch>
    </Router>
    
  );
}

export default App;
