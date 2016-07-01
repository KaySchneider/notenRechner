import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, Redirect } from 'react-router';
import App from './components/App';
import PoweredBy from './components/Powered-by';
import GradeCalc from './components/GradeCalc';

window.React = React;

render(
  (<Router history={hashHistory}>
    <Route path="/" component={App}>
      <Redirect from="/" to="/calc" />
      <Route path="/calc" component={GradeCalc} />
      <Route path="/poweredby" component={PoweredBy} />
    </Route>
  </Router>), document.getElementById('content')
);
