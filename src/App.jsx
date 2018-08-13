import React, { Component } from 'react';

import { Provider } from "react-redux";
import { Switch, Route} from "react-router";
import { ConnectedRouter } from 'react-router-redux';
import { history, store } from './store';
import Home from './container/Home';
import BaseLayout from './layouts/BaseLayout';
import AutoScroll from './components/AutoScroll/AutoScroll';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
       <BaseLayout>
       <ConnectedRouter history={history}>
      
      <AutoScroll>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
        </AutoScroll>
        </ConnectedRouter>
        </BaseLayout>
      </Provider>
    );
  }
}

export default App;
