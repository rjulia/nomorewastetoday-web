import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router';
// use for generate sitemap.xml automatic
export default (
  <Switch>
    <Route exact path="/" />
    <Route exact path="/contact" />
    <Route exact path="/shops" />
    <Route exact path="/advices" />
    <Route exact path="/thankyou" />
    <Route exact path="/404" />
  </Switch>
);
