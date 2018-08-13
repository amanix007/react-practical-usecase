import React, { Component } from 'react';

import { Provider } from "react-redux";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { ConnectedRouter } from 'react-router-redux';
import { history, store } from './store';

import Home from './container/Home';
import Landing from './layouts/Landing';
import SignUp from './components/Auth/SignUp';
import SignIn from './components/Auth/SignIn';
import PasswordForget from './components/Auth/PasswordForget';
import Account from './components/Profile/Account';

import BaseLayout from './layouts/BaseLayout';
import AutoScroll from './components/AutoScroll/AutoScroll';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <BaseLayout>
            <ConnectedRouter history={history}>
              <AutoScroll>
                <Switch>
                  <Route exact path='/' component={Landing} />
                  <Route exact path='/signup' component={SignUp}/>
                  <Route exact path='/signin' component={SignIn}/>
                  <Route exact path='/password-forget' component={PasswordForget}/>
                  <Route exact path='/home' component={Home}/>
                  <Route exact path='/account' component={Account}/>
                </Switch>
              </AutoScroll>
            </ConnectedRouter>
          </BaseLayout>
        </Router>
      </Provider>
    );
  }
}

export default App;
