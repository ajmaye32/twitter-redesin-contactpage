import React from 'react';
import './App.css';
import Nav from './Nav';
import HelpCenter from './HelpCenter';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HelpTopcis from './HelpTopics';
import Guides from './Guides';
import Contactus from './Contactus';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/HelpCenter" component={HelpCenter} />
        <Route path="/HelpTopics" component={HelpTopcis} />
        <Route path="/Guides" component={Guides} />
        <Route path="/Contactus" component={Contactus} />
        <Footer />
      </div>
    </Router>
  );
}


export default App;

