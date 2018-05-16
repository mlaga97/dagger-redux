// Library imports
import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {BrowserRouter} from 'react-router-dom';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap';

// Actions
import {AUTH_STATUS_REQUESTED} from '../actions/allActions';

// Pages
import UserList from './UserList';

let divStyle = {
	'paddingLeft': '15px',
	'paddingRight': '15px',
	'paddingBottom': '15px',
}

function HomePage() {
	return <p>Hello.</p>
}
	
// The main layout for the application
class App extends React.Component {
	componentWillMount() {
		// Do stuff that the entire application needs
		this.props.dispatch({type: AUTH_STATUS_REQUESTED});
	}

	render() {
		// TODO: Fix settings back
		/*if(!this.props.settings) {
			return (
				<div>
					Loading settings...
				</div>
			);
		} else {*/
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
								<IndexLinkContainer to='/search'>
									<NavItem eventKey={3}>Search</NavItem>
								</IndexLinkContainer>
								<IndexLinkContainer to='/statistics'>
									<NavItem eventKey={4}>Statistics</NavItem>
								</IndexLinkContainer>
								<IndexLinkContainer to='/settings'>
									<NavItem eventKey={5}>Settings</NavItem>
								</IndexLinkContainer>
								<IndexLinkContainer to='/users'>
									<NavItem eventKey={6}>User List</NavItem>
								</IndexLinkContainer>
							</Nav>
						</Navbar>
						
						<div style={divStyle}>
							<Route exact path='/' component={HomePage} />
							<Route path='/assessment' component={HomePage} />
							<Route path='/search' component={HomePage} />
							<Route path='/statistics' component={HomePage} />
							<Route path='/settings' component={HomePage} />

							<Route exact path='/users' component={UserList} />
						</div>
					</div>
				</BrowserRouter>
			);
		//}
	}
}
						//<Route exact path='/user' component={UserPage} />
						//<Route path='/user/*' component={UserPage} />

function mapStateToProps(state) {
	return {
		settings: state.settings,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch: dispatch,
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);

