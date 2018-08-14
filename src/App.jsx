import React, { Component } from 'react';

import { Provider } from "react-redux";
import { Switch, Route} from "react-router-dom";
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
        <ConnectedRouter history={history}>
          <BaseLayout>
            <AutoScroll>
              <Switch>
                <Route exact path='/landing' component={Landing} />
                <Route path='/signup' component={SignUp} />
                <Route path='/signin' component={SignIn} />
                <Route path='/password-forget' component={PasswordForget} />
                <Route path='/home' component={Home} />
                <Route path='/account' component={Account} />
              </Switch>
            </AutoScroll>
          </BaseLayout>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
