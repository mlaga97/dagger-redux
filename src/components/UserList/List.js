// Library imports
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

const Header = () => (
  <tr>
    <th>ID</th>
    <th>Username</th>
    <th>Active</th>
    <th>Admin</th>
    <th>Debug</th>
    <th>Tester</th>
  </tr>
);

const User = ({user}) => (
  <tr key={user.id}>
    <td>
      <Link to={`/user/${user.id}`}>{user.id}</Link>
    </td>
    <td>{user.login.username}</td>
    <td>{user.login.active ? 'Yes' : 'No'}</td>
    <td>{user.flags.admin ? 'Yes' : 'No'}</td>
    <td>{user.flags.debug ? 'Yes' : 'No'}</td>
    <td>{user.flags.tester ? 'Yes' : 'No'}</td>
  </tr>
);

const List = ({users}) => (
  <Table>
    <thead>
      <Header/>
    </thead>
    <tbody>
      {
        Object.keys(users).map((userID) => (
          <User user={users[userID]}/>
        ))
      }
    </tbody>
  </Table>
)

export default List;
