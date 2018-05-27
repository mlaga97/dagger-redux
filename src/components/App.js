// Library imports
import React from 'react';
import {Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {IndexLinkContainer} from 'react-router-bootstrap';

// Components
import LogoutPage from './LogoutPage';
import AssessmentPage from './AssessmentPage';
import ClinicList from './ClinicList';
import ClinicPage from './ClinicList';
import UserList from './UserList';
import UserPage from './UserList';

// Helpers
function HomePage() {
	return <p>Hello.</p>
}

let divStyle = {
	'paddingLeft': '15px',
	'paddingRight': '15px',
	'paddingBottom': '15px',
}


class PrivateApp extends React.Component {
	// Do stuff that the entire application needs
	componentWillMount() {
		// TODO: Get server data
		// TODO: Get user data
		// TODO: Get users' data (admin only?)
		// TODO: Get clinic data
		// TODO: Get assessment [meta?]data
		// TODO: Setup response?
	}

	render() {
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
							<IndexLinkContainer to='/assessment'>
								<NavItem eventKey={2}>Assessment</NavItem>
							</IndexLinkContainer>
							<IndexLinkContainer to='/reportTest'>
								<NavItem eventKey={4}>Reports</NavItem>
							</IndexLinkContainer>
							<NavDropdown eventKey={5} title='Other' id='nav-dropdown-other'>
								<IndexLinkContainer to='/clinicStats'>
									<MenuItem eventKey={5.1}>Clinic Statistics</MenuItem>
								</IndexLinkContainer>
								<IndexLinkContainer to='/modules'>
									<MenuItem eventKey={5.2}>Modules</MenuItem>
								</IndexLinkContainer>
								<IndexLinkContainer to='/config'>
									<MenuItem eventKey={5.3}>Configuration</MenuItem>
								</IndexLinkContainer>
								<IndexLinkContainer to='/userStats'>
									<MenuItem eventKey={5.4}>User Statistics</MenuItem>
								</IndexLinkContainer>
								<IndexLinkContainer to='/userSettings'>
									<MenuItem eventKey={5.5}>User Settings</MenuItem>
								</IndexLinkContainer>
								<IndexLinkContainer to='/users'>
									<MenuItem eventKey={5.6}>Users</MenuItem>
								</IndexLinkContainer>
								<IndexLinkContainer to='/clinics'>
									<MenuItem eventKey={5.7}>Clinics</MenuItem>
								</IndexLinkContainer>
								<IndexLinkContainer to='/logout'>
									<MenuItem eventKey={5.8}>Logout</MenuItem>
								</IndexLinkContainer>
							</NavDropdown>
						</Nav>
					</Navbar>
					
					<div style={divStyle}>
						<Route exact path='/' component={HomePage} />
						<Route exact path='/logout' component={LogoutPage} />
						<Route exact path='/assessment' component={AssessmentPage} />

						<Route exact path='/clinics' component={ClinicList} />
						{/*<Route exact path='/clinic' component={ClinicPage} />*/}
						<Route path='/clinic/*' component={ClinicPage} />

						<Route exact path='/users' component={UserList} />
						{/*<Route exact path='/user' component={UserPage} />*/}
						<Route path='/user/*' component={UserPage} />
					</div>
				</div>
			</BrowserRouter>
		);
	}
}

export default PrivateApp;
