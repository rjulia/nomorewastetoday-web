import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { MapRecycle, Contact, Advices, Shop, Advice } from './pages';
import './App.scss';
import { Menu, MenuMobile } from './layout';
import styled from 'styled-components';
import { Modal } from './components';

const Wrapper = styled('div')`
  display: block;
  position: relative;
  @media (min-width: 768px) {
    /* margin-left: 100px; */
  }
`;

function App() {
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
        </Switch>
      </Wrapper>
      <MenuMobile />
      <Modal />
    </Router>
  );
}

export default App;
