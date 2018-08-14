import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from './SignOut';

const Navigation = ({ authUser }) =>
  <React.Fragment>
    { authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
    }
  </React.Fragment>

const NavigationAuth = () =>
  <ul className="navbar-nav ml-auto">
    <li><Link className="nav-link" to={'/landing'}>Landing</Link></li>
    <li><Link className="nav-link" to={'/home'}>Home</Link></li>
    <li><Link className="nav-link" to={'/account'}>Account</Link></li>
    <li><SignOutButton /></li>
  </ul>

const NavigationNonAuth = () =>
  <ul className="navbar-nav ml-auto">
    <li><Link className="nav-link" to={'/landing'}>Landing</Link></li>
    <li><Link className="nav-link" to={'/signin'}>Sign In</Link></li>
  </ul>

export default Navigation;

