
import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Home from 'app';
// import About from './components/About';
import Contact from './contact';

function Routes() {
  return (
    <Switch>
      {/* <Route path="/" exact component={Home} /> */}
      {/* <Route path="/about" component={About} /> */}
      <Route path="/contact" component={Contact} />
    </Switch>
  );
}

export default Routes;
