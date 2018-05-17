// Library imports
import React from 'react';
import {Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {IndexLinkContainer} from 'react-router-bootstrap';

// Components
import UserList from './UserList';
import LogoutPage from './LogoutPage';

// Helpers
function HomePage() {
	return <p>Hello.</p>
}

let divStyle = {
	'paddingLeft': '15px',
	'paddingRight': '15px',
	'paddingBottom': '15px',
}

function PrivateApp() {
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
						<IndexLinkContainer to='/'>
							<NavItem eventKey={1}>Home</NavItem>
						</IndexLinkContainer>
						<IndexLinkContainer to='/logout'>
							<NavItem eventKey={7}>Logout</NavItem>
						</IndexLinkContainer>
					</Nav>
				</Navbar>
				
				<div style={divStyle}>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/logout' component={LogoutPage} />

					{/*
					<Route exact path='/users' component={UserList} />
					<Route exact path='/user' component={UserPage} />
					<Route path='/user/*' component={UserPage} />
					*/}
				</div>
			</div>
		</BrowserRouter>
	);
}

export default PrivateApp;
