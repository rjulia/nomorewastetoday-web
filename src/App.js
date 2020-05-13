import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { MapRecycle, Contact, Advices, Shop, Advice, ThankYou, NoMatch } from './pages';
import './App.scss';
import { Menu, MenuMobile } from './layout';
import styled from 'styled-components';

const Wrapper = styled('div')`
  display: block;
  position: relative;
  @media (min-width: 768px) {
    /* margin-left: 100px; */
  }
`;

function App(props) {
  return (
    <Router>
      <Menu />
      <Wrapper>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/map" />} />
          <Route exact path="/map" component={MapRecycle} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/shops" component={Shop} />
          <Route exact path="/advices/:id" component={Advice} />
          <Route exact path="/advices" component={Advices} />
          <Route exact path="/thankyou" component={ThankYou} />
          <Route exact path="/404" component={NoMatch} />
          <Route path="*">
            <Redirect to="/404" />
          </Route>
        </Switch>
      </Wrapper>
      <MenuMobile />
    </Router>
  );
}

export default App;
