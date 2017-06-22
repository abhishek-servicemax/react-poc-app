import React from 'react';
import {Route, IndexRoute } from 'react-router';

import App from "./containers/App/App";
import Contact from "./containers/Chart/contact";
import About from "./containers/Chart/about";
import poltChart from "./containers/Chart/barchart";
import Login from "./containers/login";

export default (
 <Route path="/" component={App} >
 <IndexRoute component={App} />
  <Route path="contact" component={Contact} />
  <Route path="about" component={About} />
  <Route path="login" component={Login} /> 
  <Route path="barchart" component={poltChart} />
 </Route>
);