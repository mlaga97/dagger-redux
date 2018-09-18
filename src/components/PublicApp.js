// Library imports
import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { IndexLinkContainer } from 'react-router-bootstrap';

import '../style/dagger.css';

// Components
import LoginPage from './LoginPage';

// TODO: Show a landing page for non-logged-in users
const PublicApp = () => (
  <BrowserRouter>
    <div>
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Dagger</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <IndexLinkContainer to="/">
            <NavItem eventKey={1}>Login</NavItem>
          </IndexLinkContainer>
        </Nav>
      </Navbar>

      <div class='app'>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/login" component={LoginPage} />
      </div>
    </div>
  </BrowserRouter>
);

export default PublicApp;
