// Library imports
import React from 'react';
import {Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {IndexLinkContainer} from 'react-router-bootstrap';

// Components
import LoginForm from './LoginForm';

// Helpers
function HomePage() {
	return <p>This will be a landing page, at some point.</p>
}

let divStyle = {
	'paddingLeft': '15px',
	'paddingRight': '15px',
	'paddingBottom': '15px',
}

function PublicApp() {
	return (
		<BrowserRouter>
			<div>
				<Navbar inverse>
					<Navbar.Header>
						<Navbar.Brand>
							<a href='/'>Dagger</a>
						</Navbar.Brand>
					</Navbar.Header>
					<Nav>
						<IndexLinkContainer to='/Login'>
							<NavItem eventKey={1}>Login</NavItem>
						</IndexLinkContainer>
					</Nav>
				</Navbar>
				
				<div style={divStyle}>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/login' component={LoginForm} />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default PublicApp;
